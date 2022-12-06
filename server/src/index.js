const app = require("./app");
const port = process.env.PORT || 8000

const pg_connect = require("./Service/Access/postgres.access");

const initialize = async() => {
    //database connection and open port

    pg_connect.then(() => {
        app.listen(port, () => {
            console.log("database connect");
            console.log(`Example app listening at http://localhost:${port}`);
        })
    }).catch((err) => {console.error(err);})

    
}

initialize();