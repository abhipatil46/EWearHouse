import React from "react";
import Navbar from "./Navbar";
import AdminNav from "./AdminNav";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product_List() {

  const navigate = useNavigate()
  const [productList, setProduct] = useState([]);
  useEffect(() => {

    if(localStorage.getItem("userId") == 0){
      navigate("/Login")
  }

    axios.get("http://localhost:8080/warehouse/product/data").then(data => {
        setProduct(data.data)
    }
    ).catch(
      (error) => { console.error(error) }
    )
  }, [])
  let deleteData=(id) => {
    axios.delete("http://localhost:8080/warehouse/product/delete/"+id).then(data => {
      alert("Data Deleted Successfully...")
    }
    ).catch(
      (error) => { console.error(error) }
    )
  }

  return (
    <>
      <AdminNav />
      <h3 className="text-center my-3">Available Products</h3>
            <hr />
      <div className="table my-2 container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>Product Id</td>
              <td>Customer Id</td>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Facility</td>
              <td>Charges</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {productList.map((val, index) => {
              if (val.status !== 0) {
                return (
                  <tr key={index} className="table-active">
                    <td>{index + 1}</td>
                    <td>{val.id}</td>
                    <td>{val.customerId}</td>
                    <td>{val.name}</td>
                    <td>{val.quantity}</td>
                    <td>{val.facilityType}</td>
                    <td>{val.charges}</td>
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
  );
}

export default Product_List;
