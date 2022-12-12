import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
import {GiSaberToothedCatHead } from "react-icons/gi";
function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <h1 class="navbar-brand" >SmolBytes <GiSaberToothedCatHead/></h1> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Workspace">Workspace</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Login">Login</a>
              </li>
             
             
            </ul>
            <div class="d-flex" >
              
              <button class="btn btn-primary" href='#contact' >Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
