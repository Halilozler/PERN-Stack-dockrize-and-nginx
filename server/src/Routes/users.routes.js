const express = require('express');
const router = express.Router();

//Controllers
const userControllers = require("../Controllers/users.controller");

//Middleware
const first = require("../Middleware/firstTest.middleware");
const second = require("../Middleware/secondTest.middleware");

//Router
router.get("/",first, second, userControllers.userLogin);

module.exports = router;




