import React from "react";
import Navbar from "./Navbar";
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Feedback() {

  const [feedback,setFeedback]=useState([])

  let onChangeHandler = (e) =>{
    setFeedback({...feedback,[e.target.id]:e.target.value})
  }

  const navigate = useNavigate()
  useEffect (()=>{
    if(localStorage.getItem("userId") == 0){
        navigate("/Login")
    }
  })

let feedbackSet = ()=>{
  axios.post("http://localhost:8080/warehouse/customer/feedback/add",feedback).then((res)=>{
    setFeedback({})
  })
}

  return (
    <>
    <Navbar/>
      <div className="container col-12 d-flex justify-content-center">
        {/* From Start */}
        <div className="col-3"></div>
        <div className="form col-6 my-5 border p-4">
          <h4 className="text-center m-2">FeedBack Form</h4>
          <hr className="my-3" />
          <form>
            <div className="mb-3">
              <label htmlhtmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                onChange={onChangeHandler}
                className="form-control"
                id="name"
                required
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-3">
              <label htmlhtmlFor="contact" className="form-label">
                Contact
              </label>
              <input
                type="phone"
                onChange={onChangeHandler}
                className="form-control"
                id="contact"
                required
                placeholder="Enter your Contact"
                maxLength={10}
              />
            </div>
            <div className="mb-3">
              <div class="form-group">
                <label for="comment">
                  Comment
                </label>
                <textarea
                  class="form-control"
                  onChange={onChangeHandler}
                  id="comment"
                  rows="3"
                  placeholder="Please Enter your feedBack message"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-success m-3" onClick={feedbackSet}>
              submit
            </button>
          </form>
        </div>
        <div className="col-3"></div>

        {/* From End */}
      </div>
    </>
  );
}

export default Feedback;
