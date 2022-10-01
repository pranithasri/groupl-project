const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.post("/employ/createAccount", (req,res)=>{
   
    try
    {
        console.log(req,"Request")
        db.query(`INSERT INTO CustService.EmployeeLogin (EmpID,EmpPassword,EmpStatus)  VALUES ( ${req.body.userId},${req.body.password},'active' );`, (err,result)=>{
        if(err) {
        console.log(err)
        res.status=500;
        return res.send("creation failure");
        } 
        res.send("account created success fully");
   
    });  
}
catch(e)
{
    console.log("Error",e)
}

});

// Route to get one post


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
