import React, { useState } from "react"
import logo from './logo.svg';
import {  useNavigate } from "react-router-dom";
import axios from "axios";



export const LoginPage=()=>{
    const [userId,setUserId]=useState();
    const [password,setPassword]=useState();
    const navigator=useNavigate();
    const [userType,setUserType]=useState('Employee')
    
    const createAccount=()=>
    {
        navigator("/createAccount")
        axios.post("http://localhost:3002/employ/createAccount",
        {
            userId,
            password
        }).then((res)=>{console.log("response",res)})
    }
const selectTabStyle={
 color:"#61dafb",
 
}
const nonSelectedTabStyle={
    color:"grey"
}
    return(
        <>
        <div style={{display:"flex",alignItems:'center',height:'100%'}}>
        <div style={{width:"70%"}}>
        <img src={logo}/>
        </div>
        <div style={{width:"30%",padding:"64px"}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div onClick={()=>{setUserType("Employee")}}
                style={userType==="Employee"?selectTabStyle:nonSelectedTabStyle}
                >Employee</div>
                <div onClick={()=>{setUserType("Customer")}} style={userType==="Customer"?selectTabStyle:nonSelectedTabStyle}>Customer</div>
            </div>
           
           <div style={{marginTop:"32px",textAlign:"left"}}> User Name:</div>
           <input type="text" style={{marginTop:"16px",width:'100%'}} onChange={(e)=>{setUserId(e.target.value)}}/>
           <div style={{marginTop:"32px",textAlign:"left"}}> Pass Word:</div>
           <input type="password" style={{marginTop:"16px",width:"100%"}} onChange={(e)=>{setPassword(e.target.value)}}/>
           <div style={{marginTop:"32px",display:"flex",justifyContent:'space-between'}}>
           <button onClick={()=>{navigator(`/${userType.toLocaleLowerCase()}/dashboard`)}} > Sign In</button>
           <button onClick={()=>{createAccount()}}>Create Account</button>
           </div>
        </div>
        </div>
        
        </>
    )
}