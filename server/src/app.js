const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
require("dotenv").config();

//Router File
const usersRouter = require("./Routes/users.routes");
console.log(process.env.POSTGRE_HOST);
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

//Generic Middleware

//Generic Router:
app.use("/api/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    if(res.status(404)){
        console.log("No such route exists");
    }
    res.status(404).json({
      message: "No such route exists"
    })
  });
  

  // error handler
app.use(function(err, req, res, next) {
    console.error(err.message, err.stack);
    res.status(err.status || 500).json({
      message: "Error Message"
    })
  });

module.exports = app;