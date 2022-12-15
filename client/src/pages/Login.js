import React from 'react';
import "../stylesheets/Login.css"
// Importing React. Creating the layout for the login screen.

export default function Login() {
    return(
        <div className="col-md-6 mx-auto mt-4">
   

    <form className="form login-form">
    <h2>Login</h2>
      <div className="form-group">

        <label for="email-login" id="email-login-text" >Email:</label>
        <input className="form-input" id="email-login" required  placeholder='SomeEmail@gmail.com' type={"text"} />
      </div>
      <div className="form-group mt-1">
        <label for="password-login" id="password-login-text" >Password:</label>

        <input className="form-input" id="password-login" required placeholder='******' type={"password"} />
      </div>
      <div className="form-group d-flex">
     
        <button className="btn btn-primary center mt-3" type={"submit"}>login</button>
      </div>
      <a className='mt-5' href="/signup">Sign-up</a>
    </form>
</div>
    )
}