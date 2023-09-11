import React, { useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import AdminNav from './AdminNav';
import Product_List from './Product_List';

function AdminDashboard() {
  const navigate = useNavigate()
  useEffect (()=>{
    if(localStorage.getItem("userId") == 0){
        navigate("/Login")
    }
  })

  return (
    <>  
    <Product_List/>
    </>
  )
}

export default AdminDashboard