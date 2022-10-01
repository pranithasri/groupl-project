const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.post("/customer/createAccount", (req,res)=>{
    let val=null
    try
    {
        console.log("Q send")
    db.query("SELECT * FROM public.usersdetails", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    val=result
   
    });  
}
catch(e)
{
    console.log("Erppr",e)
}
console.log(val,"req.data",req.data);
res.send("Hello World");
});

// Route to get one post


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
