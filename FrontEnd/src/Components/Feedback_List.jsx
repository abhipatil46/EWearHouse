import React, { useState } from 'react'
import AdminNav from './AdminNav'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Feedback_List() {
const [feedback,setFeedback]=useState([])

const navigate = useNavigate()

  useEffect(() => {

    if(localStorage.getItem("userId") == 0){
      navigate("/Login")
  }

    axios.get("http://localhost:8080/warehouse/customer/feedback/data").then(data => {
      setFeedback(data.data)
    }
    ).catch(
      (error) => { console.error(error) }
    )
  }, [])

  return (
    <div> <AdminNav/>
    
    <h3 className="text-center my-3">Feedbacks</h3>
    
            <hr />
            <div className="table my-2 container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <td>Sr.No</td>              
              <td>Customer Name</td>              
              <td>Contact</td>
              <td>Comment</td> 
                        
            </tr>
          </thead>
          <tbody>
          {feedback.map((val, index) => {
              if (val.status !== 0) {
                return (
                  <tr key={index} className="table-active">
                    <td>{index + 1}</td>                    
                    <td>{val.name}</td>                    
                    <td>{val.contact}</td>
                    <td>{val.comment}</td>
                   
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    
    </div>
  )
}

export default Feedback_List