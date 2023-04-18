import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  const { user, userLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = () => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <form onSubmit={handleSubmit} className='login-container'>
      <div className='form-body'>
        <div className='login'>
          <h2>Login</h2>
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
        <div className='text-error'>
          <span className='error'>{error}</span>
          <span className='success'>{success}</span>
        </div>
        <div className='btn-body'>
          <button type='submit'>Sign in</button>
        </div>
        <h4 className='create-account'>
          New to Ema-john? <span>
            <Link to='/register'>Create New Account</Link>
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
  );
};

export default Login;