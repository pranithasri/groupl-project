const mysql = require('mysql')

const db = mysql.createConnection({
host: "database-1.cgihgqa4vvpv.us-east-1.rds.amazonaws.com",
user: "bitswilp",
password: "Voltas1001",
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