import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () =>{
    return (
    <>
    <div className="container-fluid bg-light nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#navbar">MrSKK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/home" exact activeClassName="active">Home</NavLink>    
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/services" exact activeClassName="active">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about" exact activeClassName="active">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact" exact activeClassName="active">Contact</NavLink>
                </li>
            </ul>
            </div>
            </div>
            </nav>
        </div>
     </div>
    </div>
    </>
    );
}

export default Navbar;





/* <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">

            </div>
        </div>
    </div> */