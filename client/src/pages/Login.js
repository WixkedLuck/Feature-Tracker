import React from 'react';

// Importing React. Creating the layout for the login screen.

export default function Login() {
    return(
        <div className="col-md-6 mx-auto mt-4">
    <h2>Login</h2>

    <form className="form login-form">
      <div className="form-group">

        <label for="email-login" id="email-login-text" >email:</label>
        <input className="form-input" id="email-login" type={"text"} />
      </div>
      <div className="form-group">
        <label for="password-login" id="password-login-text" >password:</label>

        <input className="form-input" id="password-login" type={"password"} />
      </div>
      <div className="form-group d-flex">
        <button id="loginBack" className="btn btn-secondary" type={"button"}>Back</button>
        <button className="btn btn-primary" type={"submit"}>login</button>
      </div>
    </form>
</div>
    )
}