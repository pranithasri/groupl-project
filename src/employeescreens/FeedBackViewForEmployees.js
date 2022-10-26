import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"

export const FeedBackViewForEmployees = () => {

  const [data, setData] = useState('');
  const getAllData = () => {
    axios
      .post("http://localhost:3002/employeeFeedback")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <h2>FeedBack</h2>
      {data ?
        <table className="data" style={{ display: "flex-wrap" }} >
          <tr>
            <th>Ticket Number</th>
            <th>Issue Type</th>
            <th>Issue Description</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Feedback</th>
            <br></br>
          </tr>
          <br></br>
          {data.map(item => {
            return (

              <tr><td>{item.TicketNumber}</td>
                <td>{item.IssueType}</td>
                <td>{item.IssueDescription}</td>
                <td>{item.CustID}</td>
                <td>{item.customerName}</td>
                <td>{item.Email}</td>
                <td>{item.Feedback}</td>
                <br></br>
              </tr>

            )
          })}   </table> : <h3>No data yet</h3>}
    </>
  )

}
