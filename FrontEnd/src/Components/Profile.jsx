import React, { useEffect } from 'react'
import Navbar from "./Navbar";
import axios from "axios";
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Profile() {

  const [user, setUser] = useState({})
  const [updatedUser, setupdatedUser] = useState({})

  const [lodaProfile,setLoadProfile] = useState(true)

  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("userId") == 0){
      navigate("/Login")
  }
    let id = localStorage.getItem("userId")
     axios.get("http://localhost:8080/warehouse/customer/data/"+id).then((res)=>{
      let response = res.data
      setUser({...user,...response})
     })
   },[])


  let onChangeHandler = (e) =>{
      setupdatedUser({...updatedUser,[e.target.id]:e.target.value})
  }

  let update = ()=>{
    let newUser = {
      ...user,
      ...updatedUser
    }
    console.log(newUser)

    axios.put("http://localhost:8080/warehouse/customer/update",newUser).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err);
    })

  }

  return (
    <>
    <Navbar/>   
<div className="container col-12 d-flex justify-content-center">
        {/* From Start */}
        <div className="col-3"></div>
        <div className="form col-6 my-5 border p-4">
          <h4 className="text-center m-2">Profile Data</h4>
          <hr className="my-3" />
          <form>
            <div className="mb-3 d-flex">             
              <div className="col-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={user.name}
                   
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-6">
                <label htmlFor="id" className="form-label">
                  Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  disabled
                  placeholder={user.id}
                   
                  onChange={onChangeHandler}
                />
              </div>

              
            </div>
            <div className="mb-3 d-flex">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                   
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder={user.email}
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
                   
                  placeholder={user.contact}
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
                  placeholder={user.city}
                   
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <button type="submit" onClick={update} className="btn btn-success m-3">
              Update
            </button>
            <br />
           
          </form>
        </div>
        <div className="col-3"></div>

        {/* From End */}
      </div>

    
    </>
  )
}

export default Profile