import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"
export const FAQViewForEmployees=()=>{

    const [data, setData]  = useState('');
const getAllData = () => {
        axios
          .post("http://localhost:3002/faq")
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
},[]);
return (
        <>
            {data ? 
                <table className="data" style={{display:"flex-wrap"}} >
                <tr><th>Question ID</th><th>Question</th><th>Question category</th><th>Answer</th><th>Question Status</th><br></br></tr>
            <br></br>
              {data.map(data1 => {
                    return(
                      
                         <tr><td>{data1.QuestionID}</td>
                         <td>{data1.Question}</td>
                         <td>{data1.Qcategory}</td>
                         <td>{data1.Answer}</td>
                         <td>{data1.QStatus}</td><br></br></tr>

                    )
                }) }   </table> : <h3>No data yet</h3> }
        </>
    )

}
