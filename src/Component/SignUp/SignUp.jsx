import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png'
import '../Login/Login.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {

  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    event.preventDefault();

    setError("")
    setSuccess("")

    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const conform = form.conform.value;
    if (password !== conform) {
      setError("Did'n match password");
      return;
    }

    registerUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("Sign up successful") 
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='login-container'>
        <div className='form-body'>
          <div className='login'>
            <h2>Sign up</h2>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User name</span>
            </label>
            <input type="text" name='name' placeholder="user name" className="input" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Conform Password</span>
            </label>
            <input type="password" name='conform' placeholder="password" className="input" />
          </div>
          <div className='text-error'>
            <span className='error'>{error}</span>
            <span className='success'>{success}</span>
          </div>
          <div className='btn-body'>
            <button type='submit'>Sign up</button>
          </div>
          <h4 className='create-account'>
            Already have an account? <span>
              <Link to='/login'>Please Sign in</Link>
            </span>
            <p>OR</p>
          </h4>
          <div className='google'>
            <button>
              <span><img src={google} alt="google" /></span>
              <span>Continue with google</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;