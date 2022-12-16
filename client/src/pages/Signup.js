import React, {useState} from 'react';
import "../stylesheets/signup.css"
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

// Importing React thereabove, and generating/exporting a signup page.
function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      
    
        <form className="form signup-form " onSubmit={handleFormSubmit} >
          <div className="form-group">
          <h2>Signup</h2>
            <label for="name-signup" id="name-signup-text"></label>
            <input className="form-input " required placeholder='First Name' name="firstName"  type="firstName" id="fname-signup" onChange={handleChange} />
          </div>
          <div className="form-group mt-1">
          <label for="name-signup" id="name-signup-text"></label>
            <input className="form-input " required  placeholder='Last Name' name='lastName' type="lastName" onChange={handleChange} id="Lname-signup" />
          </div>
          <div className="form-group mt-1 ">
            <label  for="email-signup" id="email-signup-text" ></label>
            <input className="form-input " required placeholder='Email' name='email' type="email" onChange={handleChange}id="email-signup" />
          </div>
          <div className="form-group mt-1">
            <label for="password-signup" id="password-signup-text" ></label>
            <input className="form-input" required placeholder='Password'  name='password' type="password" onChange={handleChange} id="password-signup" />
          </div>
          <div className="form-group d-flex mt-5">
          <button className="btn btn-submit center" type={"submit"}>Sign-Up</button>
          <button className="btn btn-primary center" type={"submit"}>
            <a className='no-decoration' href="/login">Login</a></button>
        </div>
        </form>
    </div>
    
  
    )

}
export default Signup;