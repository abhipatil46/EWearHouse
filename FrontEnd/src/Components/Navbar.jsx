import React from "react";
import { NavLink, Link, useNavigate} from "react-router-dom";

function Navbar() {

  const Navigate = useNavigate();

  return (
    <>
      {/* navbar start */}
     
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-2 bg-dark text-light">
        <div className="col-md-3 mb-2 mb-md-0">
          <h4> E-WareHouse </h4>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="mx-2">
            <Link to="/Home" className="text-light ">
              Home
            </Link>
          </li>          
          <li className="mx-2">
          
            <Link to="/Add_Product" className="text-light">
              Add-Product
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/Feedback" className="text-light">
              Feedback
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" onClick={()=>{
            localStorage.clear();
            Navigate("/Login")
          }} className="btn btn-primary m-2">   
          LogOut                     
          </button>
          <button type="button" className="btn btn-primary m-2">
          <Link to="/profile" className="text-light">
          Profile
            </Link>
          
          </button>
        </div>
      </header>
      

      {/* Navbar End */}
    </>
  );
}

export default Navbar;
