import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
import {TicketsViewForEmployees} from "./TicketsViewForEmployees";
import {FAQViewForEmployees} from "./FAQViewForEmployees";
import {FeedBackViewForEmployees} from "./FeedBackViewForEmployees"

export default function EmployeeSideBar() {
  const navigator=useNavigate();
  const [pageSelected,setPageSelected]=useState("tickets")
  const selectTabStyle={
    color:"#61dafb",
    padding:"8px"
    
   }
   
  return (
    <div style={{display:'flex'}}>
    <div style={{height:"100vh",backgroundColor:"white",width:'148px',borderRight:'1px solid grey',boxShadow:"1px 1px 0px #999"}}>
      <div onClick={()=>{
       setPageSelected("tickets")
      }} style={pageSelected==="tickets"? selectTabStyle:{
        padding:"8px"
      }}>Tickets</div>
      <div onClick={()=>{
        setPageSelected("feedback")
        
      }}  style={pageSelected==="feedback"?selectTabStyle:{padding:"8px"}}>Feed Back</div>
      <div
       onClick={()=>{
        setPageSelected("FAQ")
      }} 
      style={pageSelected==="FAQ"?selectTabStyle:{padding:"8px"}} 
      >FAQ</div>
      
    </div>
    <div style={{width:"100%"}}>
      {pageSelected==="tickets"?<TicketsViewForEmployees/>:
      pageSelected==="feedback"?<FeedBackViewForEmployees/>:
      pageSelected==="FAQ"?<FAQViewForEmployees/>:<></>}
      </div>

    </div>
  )
}
