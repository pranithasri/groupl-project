import React, { useEffect, useState } from 'react'
import axios from "axios"

export const TicketsViewForCustomers = () => {
  const [tickets,setTickets]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3002/customertickets/${localStorage.getItem("customer")}`).then((res)=>{if(res.status===200)
 {

      setTickets(res.data)
 }})
    
  },[])
  return (
    <>
    {tickets.length ? 
      <table className="data" style={{display:"flex-wrap"}} >
      <tr><th>TicketNumberestion</th><th>EmpID</th><th>IssueType</th><th>IssueDescription</th><th>Status</th><br></br></tr>
  <br></br>
    {tickets.map(data1 => {
          return(
            
               <tr><td>{data1.TicketNumber}</td>
               <td>{data1.EmpID}</td>
               <td>{data1.IssueType}</td>
               <td>{data1.IssueDescription}</td>
               <td>{data1.Status}</td><br></br></tr>

          )
      }) }   </table> : <h3>No data yet</h3> }
</>
  )
}
