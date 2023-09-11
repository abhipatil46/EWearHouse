import "./App.css";
import { Routes, Route } from "react-router-dom";
import Customers_List from "./Components/Customers_List";
import Register from "./Components/Register";
import Product_List from "./Components/Product_List";
import Login from "./Components/Login";
import Feedback from "./Components/Feedback";
import Add_Product from "./Components/Add_Product";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import { useEffect } from "react";
import AdminDashboard from "./Components/AdminDashboard";
import Feedback_List from "./Components/Feedback_List";


function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Customers_List" element={<Customers_List />} />
        <Route path="/Feedback_List" element={<Feedback_List />} />
        <Route path="/Product_List" element={<Product_List />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Add_Product" element={<Add_Product />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </div>
  );
}

export default App;
