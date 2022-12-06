const app = require("./app");
const port = process.env.PORT || 8000

const pg_connect = require("./Service/Access/postgres.access");

const initialize = async() => {
    //database connection and open port
    let dbconnect = 0;
    const interval = setInterval(async() => {
        try {
            if(dbconnect > 9){
                console.log("Failed to connect to database, shutting down");
                clearInterval(interval);
                process.kill();
            }
            await pg_connect.then(() => {
                app.listen(port, () => {
                    console.log("database connect");
                    console.log(`Example app listening at http://localhost:${port}`);
                    clearInterval(interval);
                }).catch((err) => { throw new Error(err) })
            })
        } catch (err) {
            dbconnect++;
            console.log(`${dbconnect}. deneme`);
            console.log(err);
        }
    }, 1500)
}


initialize();