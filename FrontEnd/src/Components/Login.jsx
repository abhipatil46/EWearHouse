import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {


  useEffect(()=>{
    localStorage.setItem("userId",0)
  })
  
  const [user, setuser] = useState({});

  let onChangeHandler = (e) => {
    setuser({ ...user, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();

  let login = () => {
    axios
      .post("http://localhost:8080/warehouse/login", user)
      .then((responce) => {
        console.log(responce.data);
        if (responce.data.id !=null) {
          localStorage.setItem("userId",responce.data.id)
          navigate("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container col-12 d-flex justify-content-center">
        {/* From Start */}
        <div className="col-4"></div>
        <div className="form col-4 my-5 border p-4">
          <h4 className="text-center m-2">Login</h4>
          <hr className="my-3" />
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Email address
              </label>
              <input
                type="email"
                required
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email"
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-3">
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
            {user.username === "admin@gmail.com" && user.password === "admin" && (
              <button
                type="button"
                onClick={()=>{
                  localStorage.setItem("userId",100)
                  navigate("/AdminDashboard")
                }}
                className="btn btn-success m-3"
              >
                Admin Login
              </button>
            )}
            <button
              type="button"
              onClick={login}
              className="btn btn-success m-3"
            >
              Login
            </button>
            <br/>
            <Link to="/"> Don't have a account ? Register here </Link>
          </form>
        </div>
        <div className="col-4"></div>

        {/* From End */}
      </div>
    </>
  );
}

export default Login;
