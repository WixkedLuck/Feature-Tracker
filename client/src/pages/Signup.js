import React from 'react';

// Importing React thereabove, and generating/exporting a signup page.

export default function Signup() {
    return(
    <div className="col-md-6 mx-auto mt-4">
        <h2>Signup</h2>
    
        <form className="form signup-form">
          <div className="form-group">
            <label for="name-signup" id="name-signup-text">name:</label>
            <input className="form-input" type={"text"} id="name-signup" />
          </div>
          <div className="form-group">
            <label for="email-signup" id="email-signup-text" >email:</label>
            <input className="form-input" type={"text"} id="email-signup" />
          </div>
          <div className="form-group">
            <label for="password-signup" id="password-signup-text" >password:</label>
            <input className="form-input" type={"password"} id="password-signup" />
          </div>
          <div className="form-group">
             <button id="signupBack" className="btn btn-secondary" type={"button"}>Back</button>
            <button className="btn btn-primary" type={"submit"}>signup</button>
          </div>
        </form>
    </div>
    
  
    )
}