const mysql = require('mysql')

const db = mysql.createConnection({
host: "127.0.0.1",
user: "postgres",
password: "postgres",
database:"postgres" ,
port :"5432"
})


db.connect((err)=>{
    if(err)
    {
        throw err;
    }
    console.log("DB connect success")
})


module.exports = db;