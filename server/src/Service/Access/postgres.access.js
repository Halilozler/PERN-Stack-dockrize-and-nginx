const { Client } = require("pg");
const pg_config = require("../../Config/postgre.config");

const pg_connect = new Promise(async(resolve, reject)=> {
    try {
        global.db = await new Client(pg_config);

        global.db.connect(function(err) {
            if(err){
                console.log("database connect error");
                reject(err);
            }
            resolve();
        })
    } catch (err) {
        reject(err);
    }
}) 

module.exports = pg_connect;