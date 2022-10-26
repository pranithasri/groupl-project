import React, { useState } from "react"
import axios from "axios";

export const FeedBackViewForCustomers = () => {
  const [custID, setCustID] = useState();
  const [ticketNumber, setTicketNumber] = useState();
  const [feedback, setFeedback] = useState();
  const [open, setOpen] = useState(false);

  const submitFeedback = () => {

    axios.post("http://localhost:3002/submitFeedback",
      {
        custID,
        ticketNumber,
        feedback
      }).then((res) => {
        if (res.status === 200) {
          console.log(res.status);
          setOpen(true);
          setCustID('');
          setTicketNumber('');
          setFeedback('');
        }
      }).catch((e) => {
        console.log("Error", e)
      })

  };

  return (

    <>
      <h3>FeedBack Form</h3>
      {open ? <div style={{
        padding: "20px",
        backgroundColor: "green", /* Red */
        color: "white",
        marginbottom: "15px",
        width: "70%",
        marginLeft: "120px"
      }}
      >
        <div >
          FeedBack submitted successfully.
        </div>
      </div> : <div></div>}
      <div style={{ display: "flex", height: '100%', width: '50%' }}>
        <div style={{ width: "70%", marginLeft: '10%' }}>
          <div style={{ marginTop: "32px", textAlign: "left" }}> Customer ID:</div>
          <input type="text" style={{ marginTop: "16px", width: '100%' }} value={custID} onChange={(e) => { setCustID(e.target.value) }} />
          <div style={{ marginTop: "32px", textAlign: "left" }}> Ticket Number:</div>
          <input type="text" style={{ marginTop: "16px", width: '100%' }} value={ticketNumber} onChange={(e) => { setTicketNumber(e.target.value) }} />
          <div style={{ marginTop: "32px", textAlign: "left" }}> Feedback:</div>
          <textarea style={{ marginTop: "16px", width: '100%' }} value={feedback} onChange={(e) => { setFeedback(e.target.value) }} />
          <button style={{ marginTop: "16px" }} onClick={() => {
            submitFeedback()
          }} > Submit</button>
        </div>
      </div>


    </>
  )
}
