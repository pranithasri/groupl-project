import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
import {TicketsViewForCustomers} from "./TicketsViewForCustomers";
import {FeedBackViewForCustomers} from "./FeedBackViewForCustomers";
import {ConnectionViewForCustomers} from "./ConnectionViewForCustomers"
import {CallViewForCustomers} from "./CallViewForCustomers"
import {UpdateViewForCustomers} from "./UpdateViewForCustomers"
import {HistoryViewForCustomers} from "./HistoryViewForCustomers"
import {FAQViewForCustomers} from "./FAQViewForCustomers"


export default function CustomerSideBar() {
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
        <div onClick={()=>{
       setPageSelected("connection")
      }} style={pageSelected==="connection"? selectTabStyle:{
        padding:"8px"
      }}>Connection</div>
      <div onClick={()=>{
        setPageSelected("call")
        
      }}  style={pageSelected==="call"?selectTabStyle:{padding:"8px"}}>Schedule Call</div>
      <div
       onClick={()=>{
        setPageSelected("history")
      }} 
      style={pageSelected==="history"?selectTabStyle:{padding:"8px"}} 
      >View In Voice History</div>

     <div
       onClick={()=>{
        setPageSelected("update details")
      }} 
      style={pageSelected==="update details"?selectTabStyle:{padding:"8px"}} 
      >Update Details</div>
      
    </div>
    <div style={{width:"100%"}}>
      {pageSelected==="tickets"?<TicketsViewForCustomers/>:
      pageSelected==="feedback"?<FeedBackViewForCustomers/>:
      pageSelected==="FAQ"?<FAQViewForCustomers/>:
      pageSelected==="connection"?<ConnectionViewForCustomers/>:
      pageSelected==="call"?<CallViewForCustomers/>:
      pageSelected==="history"?<HistoryViewForCustomers/>:
      pageSelected==="update details"?<UpdateViewForCustomers/>:<></>}
      </div>

    </div>
  )
}
