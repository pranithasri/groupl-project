import React, { useState } from "react"
import logo from './logo.svg';
import {  useNavigate } from "react-router-dom";
import axios from "axios";



export const LoginPage=()=>{
    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();
    const navigator=useNavigate();
    
   
    const signIn=()=>
    {
        axios.post("http://localhost:3002/customer/createAccount",
        {
            userName,
            password
        }).then((res)=>{console.log("response",res)})
    }

    return(
        <>
        <div style={{display:"flex",alignItems:'center',height:'100%'}}>
        <div style={{width:"70%"}}>
        <img src={logo}/>
        </div>
        <div style={{width:"30%",padding:"64px"}}>
           <div style={{marginTop:"32px",textAlign:"left"}}> User Name:</div>
           <input type="text" style={{marginTop:"16px",width:'100%'}} onChange={(e)=>{setUserName(e.target.value)}}/>
           <div style={{marginTop:"32px",textAlign:"left"}}> Pass Word:</div>
           <input type="password" style={{marginTop:"16px",width:"100%"}} onChange={(e)=>{setPassword(e.target.value)}}/>
           <div style={{marginTop:"32px",display:"flex",justifyContent:'space-between'}}>
           <button onClick={()=>{signIn()}}> Sign In</button>
           <button>Create Account</button>
           </div>
        </div>
        </div>
        
        </>
    )
}