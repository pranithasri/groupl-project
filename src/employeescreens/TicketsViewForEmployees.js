import React, { useEffect, useState } from 'react'
import axios from "axios"

export const  TicketsViewForEmployees=()=> {
  const [tickets,setTickets]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3002/employeetickets/${localStorage.getItem("employee")}`).then((res)=>{if(res.status===200)
 {

      setTickets(res.data)
 }})
    
  },[])
  return (
    <>
    {tickets.length ? 
      <table className="data" style={{display:"flex-wrap"}} >
      <tr><th>TicketNumberestion</th><th>CustID</th><th>IssueType</th><th>IssueDescription</th><th>Status</th><br></br></tr>
  <br></br>
    {tickets.map(data1 => {
          return(
            
               <tr><td>{data1.TicketNumber}</td>
               <td>{data1.CustID}</td>
               <td>{data1.IssueType}</td>
               <td>{data1.IssueDescription}</td>
               <td>{data1.Status}</td><br></br></tr>

          )
      }) }   </table> : <h3>No data yet</h3> }
</>
  )
}


