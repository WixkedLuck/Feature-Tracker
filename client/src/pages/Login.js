import React, { useState } from 'react';
import "../stylesheets/Login.css";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

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

    return(
        <div className="col-md-6 mx-auto mt-4">
   

    <form className="form login-form" onSubmit={handleFormSubmit}>
    <h2>Login</h2>
      <div className="form-group">

        <label for="email-login" id="email-login-text" >Email:</label>
        <input className="form-input" id="email-login" required  placeholder='SomeEmail@gmail.com' name="email" type="email" onChange={handleChange} />
      </div>
      <div className="form-group mt-1">
        <label for="password-login" id="password-login-text" >Password:</label>

        <input className="form-input" id="password-login" required placeholder='******' name="password" type="password"  onChange={handleChange}/>
      </div>
      <div className="form-group d-flex">
     
     
        <button className="btn btn-primary center mt-3" type={"submit"}>login</button>
      </div>
      <a className='mt-5' href="/signup">Sign-up</a>
      {error ? (
            <div>
            <p className="error-text"> credentials are incorrect</p>
            <p className="error-text"> try again</p>
            </div>
        ) : null}
    </form>
</div>
    )
}

export default Login;