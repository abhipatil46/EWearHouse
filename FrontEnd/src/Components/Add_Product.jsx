import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Add_Product() {
    var [availableSpace,setAvailableSpace] = useState(0);
    var [product,setProduct] = useState([]);
    var [productObj,setProductObj] = useState({});
    var [FType,setFtype] = useState("");
    var [Quentity,setQuentity] = useState(0);
    var [Charges,setCharges] = useState(0);
    var [customer,setCustomer] = useState(0);

    const [isClicked, setIsClicked] = useState(false)

    const navigate = useNavigate();

    let Add = () =>{
        axios.post("http://localhost:8080/warehouse/product/add",productObj).then(responce=>{
          if(responce.status === 200){
            alert("Product added successfully...")
          }
           
        }).catch((err)=>{
          console.log(err);
        })
        setProductObj({})
    }

    useEffect(() => {

      if(localStorage.getItem("userId") == 0){
        navigate("/Login")
    }

      setCustomer(localStorage.getItem("userId"))
        axios.get("http://localhost:8080/warehouse/availablespace").then(data => {
        setAvailableSpace(data.data)
      }
      ).catch(
        (error) => { console.error(error) }
      )

      let id = localStorage.getItem("userId")
      axios.get("http://localhost:8080/warehouse/product/data/"+id).then(response=>{
        console.log(response.data)
        setProduct([...product,...response.data])
        
        }).catch((err)=>{
          console.log(err);
        })

    }, [])
    


    let calCharges = ()=>{
        let totalCharges = 0
        if(FType == "AC"){
           totalCharges =  4 * Quentity
           setCharges(totalCharges)
        }else if(FType == "Non-AC"){
            totalCharges = 2 * Quentity
            setCharges(totalCharges)
        }else{
            totalCharges = 0
            setCharges(totalCharges)
        }
         setProductObj({...productObj,['charges']:totalCharges})
         setProductObj({...productObj,['customerId']:customer})
         setIsClicked(true)
    }
  return (
    <>
    <Navbar/>
    <h4 className='text-center m-3'> Available space : {availableSpace} </h4>
      <div className="container col-12 d-flex justify-content-center">
        {/* From Start for add product */}
        <div className="col-3"></div>
        <div className="form col-6 my-5 border p-4">
          <h4 className="text-center m-2">Add Product</h4>
          <hr className="my-3 " />
          <form>
            <div className="mb-3 d-flex">
              <div className="col-6">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  onChange={(e)=>{
                    setProductObj({...productObj,['name']:e.target.value})
                  }}
                />
              </div>
              <div className="col-6">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  required
                  onChange={(e)=>{
                   setQuentity(e.target.value)
                   setProductObj({...productObj,['quantity']:e.target.value})
                  }}
                />
              </div>
            </div>
            <div className="mb-3 d-flex">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="facilityType">Facility Type</label>
                  <select className="form-control" id="facilityType"
                  onChange={(e)=>{
                    setFtype(e.target.value)
                    setProductObj({...productObj,[e.target.id]:e.target.value})
                   }} value={FType}
                  > 
                  <option value= "">Select Facility</option>  
                  <option value= "Non-AC">Non-AC</option>  
                    <option value="AC">AC</option>                
                  </select>
                </div>
              </div>
              <div className="col-4">
                <label htmlFor="customerId" className="form-label">
                  Customer ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="customerId"
                  disabled
                  value={customer}
                  onChange={(e)=>{
                   setQuentity(e.target.value)
                  //  setProductObj({...productObj,['customerId']:e.target.value})
                  }}
                  required
                />
              </div>
              <div className="col-4">
                <label htmlFor="charges" className="form-label">
                  Total Charges
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="charges"
                  required
                readOnly
                  value= {Charges}
                />
              </div>
            </div>
            <button type="button" className="btn btn-outline-success m-2" onClick={calCharges}>
              Cal Charges
            </button>
            {isClicked && <button type="submit" onClick={Add} className="btn btn-outline-success m-3">
              Add_Product
            </button>}
          </form>
        </div>
        <div className="col-3"></div>
        {/* From End */}
      </div>
      <div className="mainheadline">
        <h4 className='text-center mt-3'>Available Products</h4>
        <div className="headingunderline"></div>
    </div>

      <div className="maincard m-3 p-3 d-flex justify-content-center flex-wrap">      
        {
            product.map((item,index)=>{
                return (
            <div key={index} className="card p-1 m-2" id = 'Cards' style={{width:"18rem",
            boxShadow: "5px 5px 5px 2px grey"
            }}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2"> Product ID : {item.id}</h6>
                <h6 className="card-subtitle mb-2">Product Name : {item.name}</h6>
                {/* <h5 className="card-title">Product Name</h5> */}
                <h6 className="card-subtitle mb-2">Facility Type : {item.facilityType}</h6>
                <h6 className="card-subtitle mb-2"> Total Charges : {item.charges}</h6>
                {/* <p className="card-text">{item.}</p> */}
                
            </div>
            
        </div>
             ) })
        }
        
    </div>
        <Footer/>
    </>
  );
}

export default Add_Product;
