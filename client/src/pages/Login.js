import React, { useState } from 'react';
import "../stylesheets/Login.css";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import {Link} from "react-router-dom";


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="col-md-6 mx-auto mt-4">


      <form className="form login-form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div className="form-group">

          <label for="email-login" id="email-login-text" ></label>
          <input className="form-input" id="email-login" required placeholder='Email' name="email" type="email" onChange={handleChange} />
        </div>
        <div className="form-group mt-1">
          <label for="password-login" id="password-login-text" ></label>

          <input className="form-input" id="password-login" required placeholder='Password' name="password" type="password" onChange={handleChange} />
        </div>
        <div className="form-group d-flex mt-5">
          <button className="btn btn-submit center" type={"submit"}>Login</button>
          <button className="btn btn-primary center" type={"submit"}>
            <Link to="/signup" className='no-decoration' >Sign-up</Link></button>
        </div>
        {error ? (
          <div className='mt-3'>
            <p className='login-err-text'>Credentials are incorrect, try again?</p>
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default Login;