import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import {Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

const App =  () => {
  return(
    <>
    <Navbar />
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Service />} />
      <Route path="/" element={ <Navigate to="/Not found" /> } />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
