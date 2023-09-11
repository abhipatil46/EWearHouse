import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import AdminDashboard from './AdminDashboard';
import AdminNav from './AdminNav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Customers_List() {

  const [customer, setCustomer] = useState([]);

  const navigate = useNavigate()
  
  useEffect(() => {

    if(localStorage.getItem("userId") == 0){
      navigate("/Login")
    }

    axios.get("http://localhost:8080/warehouse/customer/data").then(data => {
      setCustomer(data.data)
    }
    ).catch(
      (error) => { console.error(error) }
    )
  }, [])
  let deleteData=(id) => {
    axios.delete("http://localhost:8080/warehouse/customer/delete/"+id).then(data => {
      alert("Data Deleted Successfully...")
    }
    ).catch(
      (error) => { console.error(error) }
    )
  }


  return (
    <>
      <AdminNav />
      <h3 className="text-center my-3">All Customers</h3>
      <hr />
      <div className="table my-2 container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>Customer ID</td>
              <td>Customer Name</td>
              <td>Email</td>
              <td>Contact</td>
              <td>City</td>
              <td>Action</td>
              
            </tr>
          </thead>
          <tbody>
            {customer.map((val, index) => {
              if (val.status !== 0) {
                return (
                  <tr key={index} className="table-active">
                    <td>{index + 1}</td>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.contact}</td>
                    <td>{val.city}</td>
                   
                    <td>
                      <form action="">
                        <button
                          type="submit"
                          className="btn btn-danger"
                          onClick={() => {
                            deleteData(val.id);
                          }}
                        >
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Customers_List