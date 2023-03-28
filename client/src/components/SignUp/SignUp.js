import React from 'react';
import "./Signup.css";
import Header from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <Header/>
      {/* start of signup wrapper */}
      <div className="signup-wrapper">
        <form action='' method='post'>
          <div className="signup-form">
            <div className="signup-form-row form-title">
              SignUp
            </div>

            <div className='signup-form-row'>
              <input type="text" placeholder='First name'/>
              <input type="text" placeholder='Last name'/>
            </div>

            <div className='signup-form-row'>
              <input type="email" placeholder='example@mail.com'/>
            </div>

            <div className='signup-form-row'>
              <input type="password" placeholder='password'/>
              <input type="password" placeholder='confirm password'/>
            </div>
            <div className='signup-form-row'>
              <label for="termsConditions">

                <input type="checkbox" id='termsConditions"/> I agree to the' placeholder='password'/>
                <Link to="/termsConditions">Terms and Condition</Link>
              </label>
            </div>
            

            <div className='signup-form-row'>
              <button>Create Account</button>
            </div>

            <div className='signup-form-row'>
              <i>
                Already have an account? &nbsp;
                <Link to="/login">Login here</Link>

              </i>
              
            </div>

          </div>

        </form>
      </div>
      {/* end of signup wrapper */}
      
      <Footer/>
    </div>
  );
};

export default SignUp