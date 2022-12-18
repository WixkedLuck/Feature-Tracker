import React from "react";
import Auth from "../../utils/auth";
import "./Nav.css"
import {GiSaberToothedCatHead } from "react-icons/gi";

function Nav() {
  if (Auth.loggedIn()) {
    return(
<nav className="navbar sticky-top navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <a className="text-decoration-none" href="/"><h1 className="navbar-brand text-white fs-2" >SmolBytes <GiSaberToothedCatHead/></h1></a> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white " aria-current="page" href="/Workspace">Workspace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/" onClick={() => Auth.logout()}>Log Out</a>
              </li>
             
             
            </ul>
            <div className="d-flex" >
              
              <a href="/contact"><button className="btn btn-primary" href='#contact' >Contact Us</button></a>
            </div>
          </div>
        </div>
      </nav>
    )
  }else {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <a className="text-decoration-none" href="/"><h1 className="navbar-brand text-white fs-2" >SmolBytes <GiSaberToothedCatHead/></h1></a> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <a className="nav-link text-white" href="/login">Login</a>
              </li>
             
             
            </ul>
            <div className="d-flex" >
              
              <a href="/contact"><button className="btn btn-primary" href='#contact' >Contact Us</button></a>
            </div>
          </div>
        </div>
      </nav>
    );
}
}
export default Nav;
