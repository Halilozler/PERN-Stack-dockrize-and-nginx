const { Client } = require("pg");
const pg_config = require("../../Config/postgre.config");

const pg_connect = new Promise(async(resolve, reject)=> {
    global.db = await new Client(pg_config);

    global.db.connect(function(err) {
        if(err){
            console.log("database connect error");
            reject(err);
        }
        resolve();
    })
}) 

module.exports = pg_connect;