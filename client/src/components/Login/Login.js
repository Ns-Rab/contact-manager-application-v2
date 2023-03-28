import React from 'react';
import "./Login.css";
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <Header/>
        {/* start of login wrapper */}
        <div className="signup-wrapper">
        <form action='' method='post'>
          <div className="signup-form">
            <div className="signup-form-row form-title">
              Login
            </div>

            <div className='signup-form-row'>
              <input type="email" placeholder='example@mail.com'/>
            </div>

            <div className='signup-form-row'>
              <input type="password" placeholder='password'/>
              
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