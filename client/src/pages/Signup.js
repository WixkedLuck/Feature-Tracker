import React from 'react';
import "../stylesheets/signup.css"
// Importing React thereabove, and generating/exporting a signup page.

export default function Signup() {
    return(
    <div className="col-md-6 mx-auto mt-4">
      
    
        <form className="form signup-form">
          <div className="form-group">
          <h2>Signup</h2>
            <label for="name-signup" id="name-signup-text">name:</label>
            <input className="form-input" type={"text"} id="name-signup" />
          </div>
          <div className="form-group mt-1">
            <label for="email-signup" id="email-signup-text" >email:</label>
            <input className="form-input" type={"text"} id="email-signup" />
          </div>
          <div className="form-group mt-1">
            <label for="password-signup" id="password-signup-text" >password:</label>
            <input className="form-input" type={"password"} id="password-signup" />
          </div>
          <div className="form-group mt-1">
           
            <button className="btn btn-primary mt-5" type={"submit"}>signup</button>
          </div>
        </form>
    </div>
    
  
    )
}