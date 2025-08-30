import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Commonstyles.css";
import "remixicon/fonts/remixicon.css";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Categorycar from "./Components/Categorycar";
import Cardetail from "./Components/Cardetail";
import Payment from "./Components/Payment";

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Dashboard />} />
           <Route path="/carrent" element={<Categorycar/>} />
            <Route path="/car/:carName" element={<Cardetail />} /> 
            <Route path="/payment" element={<Payment />} /> 
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
