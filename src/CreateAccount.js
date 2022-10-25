import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import {  useNavigate } from "react-router-dom";
import axios from "axios";


export const CreateAccount=()=> {
    const [userType,setUserType]=useState("employee");
   const [userDetails,setUserDetails]=useState(userType==="employee"?{
    "Employee Id":"",
    "First Name":"", 
    "Middle Name":"", 
    "Last Name":"",
    "Email":"",
    "Contact Number":"",
    "Department":"", 
    "SupervisorID":"",
    "Address":"",
    "Password":"",
   "DOJ":null
   
   }:{
    "Customer Id":"",
    "First Name":"", 
    "Middle Name":"", 
    "Last Name":"",
    "Email":"",
    "Contact Number":"",
    "Address":"",
    "Password":"",
   "DOB":null
   })
    const navigator=useNavigate()
    const selectTabStyle={
        color:"#61dafb",
        
       }
       const nonSelectedTabStyle={
           color:"grey"
       }
       const createAccount=()=>
       {
        // navigator("/")
           axios.post("http://localhost:3002/createAccount",
           {
               userDetails,
               userType
           }).then((res)=>{if(res.status===200)
        {
             navigator("/")
        }})
       }
   
       useEffect(()=>{
        setUserDetails(userType==="employee"?{
            "Employee Id":"",
            "First Name":"", 
            "Middle Name":"", 
            "Last Name":"",
            "Email":"",
            "Contact Number":"",
            "Department":"", 
            "SupervisorID":"",
            "Address":"",
            "Password":"",
           "DOJ":null
           
           }:{
            "Customer Id":"",
            "First Name":"", 
            "Middle Name":"", 
            "Last Name":"",
            "Email":"",
            "Contact Number":"",
            "Address":"",
            "Password":"",
           "DOB":null
           })
       },[userType])
  return (
    <div >
    <div>CreateAccount</div>
    <div style={{display:"flex",alignItems:'center',height:'100%'}}>
    <div style={{width:"70%"}}>
    <img src={logo}/>
    </div>
    <div style={{width:"30%",padding:"64px"}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div onClick={()=>{setUserType("employee")}}
            style={userType==="employee"?selectTabStyle:nonSelectedTabStyle}
            >Employee</div>
            <div onClick={()=>{setUserType("customer")}} style={userType==="customer"?selectTabStyle:nonSelectedTabStyle}>Customer</div>
        </div>
        <div style={{maxHeight:"80vh",overflow:"auto"}}>
        {Object.keys(userDetails).map((key)=>
         key==="DOB"?
         <>
         <div style={{marginTop:"32px",textAlign:"left"}}>Enter Date Of Birth</div>
        
         <input type="date" style={{marginTop:"16px",width:'100%'}} onChange={(e)=>{
             const userDetailsInstance=JSON.parse(JSON.stringify(userDetails))
             userDetailsInstance[key]=e.target.value; setUserDetails(userDetailsInstance)
            }} value={userDetails[key]}/>
         </>:
       
        key==="DOJ"?
        <>
        <div style={{marginTop:"32px",textAlign:"left"}}>Enter Date Of Joining</div>
       
        <input type="date" style={{marginTop:"16px",width:'100%'}} onChange={(e)=>{
            const userDetailsInstance=JSON.parse(JSON.stringify(userDetails))
            userDetailsInstance[key]=e.target.value; setUserDetails(userDetailsInstance)
           }} value={userDetails[key]}/>
        </>:
            <>
            <div style={{marginTop:"32px",textAlign:"left"}}>{key}</div>
            <input type="text" style={{marginTop:"16px",width:'90%'}} onChange={(e)=>{
                
                 const userDetailsInstance=JSON.parse(JSON.stringify(userDetails))
                 userDetailsInstance[key]=e.target.value; setUserDetails(userDetailsInstance)}} value={userDetails[key]}/>
            </>
       
    )}
       </div>
       
       
       <div style={{marginTop:"32px",display:"flex",justifyContent:'space-between'}}>
 
       <button onClick={()=>{createAccount()}}>Create Account</button>
       </div>
    </div>
    </div>
    </div>
  )
}


