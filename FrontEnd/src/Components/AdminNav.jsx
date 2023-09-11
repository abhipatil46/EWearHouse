import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminNav() {
    const Navigate = useNavigate()
  return (
    <>
    
<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-2 bg-dark text-light">
        <div className="col-md-3 mb-2 mb-md-0">
          <h4> E-WareHouse </h4>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="mx-2">
          
            <Link to="/Product_List" className="text-light">
              Products List
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/Feedback_List" className="text-light">
              Feedbacks
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/Customers_List" className="text-light">
              Customers
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" onClick={()=>{
            Navigate("/Login")
          }} className="btn btn-primary m-2">   
          LogOut                     
          </button>
        </div>
      </header>
    </>
  )
}

export default AdminNav