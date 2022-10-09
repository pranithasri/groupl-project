import React, { useState } from "react"
import logo from './logo.svg';
import {  useNavigate } from "react-router-dom";
import axios from "axios";


export const CreateAccount=()=> {
    const [userId,setUserId]=useState("");
    const [password,setPassword]=useState("");
    const [userType,setUserType]=useState('Employee')
    const [confirmPassword,setConfirmPassword]=useState("")
    const navigator=useNavigate()
    const selectTabStyle={
        color:"#61dafb",
        
       }
       const nonSelectedTabStyle={
           color:"grey"
       }
       const createAccount=()=>
       {
        navigator("/")
           axios.post("http://localhost:3002/employ/createAccount",
           {
               userId,
               password
           }).then((res)=>{console.log("response",res)})
       }
  return (
    <>
    <div>CreateAccount</div>
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
       <input type="text" style={{marginTop:"16px",width:'100%'}} onChange={(e)=>{setUserId(e.target.value)}} value={userId}/>
       <div style={{marginTop:"32px",textAlign:"left"}}>Enter Pass Word:</div>
       <input type="password" style={{marginTop:"16px",width:"100%"}} onChange={(e)=>{setPassword(e.target.value)}} value={password}/>

       <div style={{marginTop:"32px",textAlign:"left"}}>Confirm Pass Word:</div>
       <input type="password" style={{marginTop:"16px",width:"100%"}} onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword}/>
       
       <div style={{marginTop:"32px",display:"flex",justifyContent:'space-between'}}>
 
       <button onClick={()=>{createAccount()}}>Create Account</button>
       </div>
    </div>
    </div>
    </>
  )
}


