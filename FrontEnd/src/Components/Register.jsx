import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const [customerObj, setCustomerObj] = useState({})

  let onChangeHandler = (e) =>{
    setCustomerObj({...customerObj,[e.target.id]:e.target.value})
  }

  useEffect(()=>{
    localStorage.setItem("userId",0)
  })


  let Register = ()=>{
    axios.post("http://localhost:8080/warehouse/customer/add",customerObj).then((res)=>{
        if(res.status===200){
          navigate("/Home")
        }else{
          alert("Registration Failed..")
        }
    })
  }

  return (
    <>
      <div className="container col-12 d-flex justify-content-center">
        {/* From Start */}
        <div className="col-3"></div>
        <div className="form col-6 my-5 border p-4">
          <h4 className="text-center m-2">Register</h4>
          <hr className="my-3" />
          <form>
            <div className="mb-3 d-flex">
              {/* <div className="col-6">
                <label htmlFor="fname" className="form-label">
                  FirstName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  required
                  placeholder="Enter your FirstName"
                />
              </div> */}
              <div className="col-12">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your Name"
                  required
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="mb-3 d-flex">
              <div className="col-6">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="mb-3 d-flex">
              <div className="col-6">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="contact"
                  required
                  placeholder="Enter your Contact"
                  maxLength={10} 
                  onChange={onChangeHandler}                 
                />
              </div>
              <div className="col-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter your city"
                  required
                  
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <button type="button" onClick={Register} className="btn btn-success m-3">
              Register
            </button>
            <br />
            <Link to="/Login">already have a Account, Login</Link>
          </form>
        </div>
        <div className="col-3"></div>

        {/* From End */}
      </div>
    </>
  );
}

export default Register;
