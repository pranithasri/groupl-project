const mysql = require('mysql')

const db = mysql.createConnection({
host: "127.0.0.1",
user: "root",
password: "Saisri",
database:"CustService" ,
port :"3306"
})

db.connect((err)=>{
    if(err)
    {
        throw err;
    }
    console.log("DB connect success")
})


module.exports = db;