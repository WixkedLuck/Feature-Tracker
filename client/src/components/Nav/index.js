import React from "react";
import Auth from "../../utils/auth";
import "./Nav.css"
import {GiSaberToothedCatHead } from "react-icons/gi";
import {Link} from "react-router-dom";
function Nav() {
  if (Auth.loggedIn()) {
    return(
<nav className="navbar sticky-top navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none" ><h1 className="navbar-brand text-white fs-2" >SmolBytes <GiSaberToothedCatHead/></h1></Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/workspace" className="nav-link active text-white " aria-current="page" >Workspace</Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link text-white"  onClick={() => Auth.logout()}>Log Out</Link>
              </li>
             
             
            </ul>
            <div className="d-flex" >
              
              <Link to="/contact"><button className="btn btn-primary"  >Contact Us</button></Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }else {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none" ><h1 className="navbar-brand text-white fs-2" >SmolBytes <GiSaberToothedCatHead/></h1></Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white" >Login</Link>
              </li>
             
             
            </ul>
            <div className="d-flex" >
              
            <Link to="/contact"><button className="btn btn-primary" href='#contact' >Contact Us</button></Link>
            </div>
          </div>
        </div>
      </nav>
    );
}
}
export default Nav;
