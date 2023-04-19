import React, {useState} from 'react';
import "./Login.css";
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [error, setError] = useState("");
  const [message, setMassage] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in...");

    const form = new FormData(e.currentTarget);
    const userData = Object.fromEntries(form);

    // console.log(userData);

    try {
      const BACKEND_URL = `http://localhost:5000/api/users/login`;
      
      const response = await axios.post (BACKEND_URL, userData);

      if (response.data.token) {
        //saving token to browser temporary storage
      window.localStorage.setItem("ACCESS_TOKEN", response.data.token);

      //redirecting to profile page

      navigate (`/profile`);
      }

      




    } catch (error) {
      setError(error.message);
    }
  };
  
  
  return (
    <div>
        <Header/>
        {/* start of login wrapper */}
        <div className="signup-wrapper">
        <form action='' method='post' onSubmit={handleLogin}>
          <div className="signup-form">
            <div className="signup-form-row form-title">
              Login
            </div>
            <div className="signup-form-row form-title form-error-message">{error}</div>
            <div className="signup-form-row form-title form-error-message">{message}</div>

            <div className='signup-form-row' >
              <input type="email" placeholder='example@mail.com' name='email'/>
            </div>

            <div className='signup-form-row'>
              <input type="password" placeholder='password' name='password'/>
              
            </div>
            
  

            <div className='signup-form-row'>
              <button>Login</button>
            </div>

            <div className='signup-form-row'>
              <i>
                Don't have an account? &nbsp;
                <Link to="/signup">Create account here</Link>
              </i>
              
            </div>

          </div>

        </form>
      </div>
        {/* end of login wrapper */}

        <Footer/>
    </div>
  )
}

export default Login