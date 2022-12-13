import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
import {GiSaberToothedCatHead } from "react-icons/gi";
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand" >SmolBytes <GiSaberToothedCatHead/></h1> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Workspace">Workspace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Login">Login</a>
              </li>
             
             
            </ul>
            <div className="d-flex" >
              
              <button className="btn btn-primary" href='#contact' >Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
