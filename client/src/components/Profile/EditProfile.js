import React from 'react';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import "./EditProfile.css";
import { Link } from "react-router-dom";
// import Profile from './Profile';
import { FaArrowLeft } from 'react-icons/fa';

const EditProfile = () => {
  return (
    <div>
        <Header/>
        {/* start of edit profile  */}
        <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row form-title">Edit Profile</div>
            <div className="signup-form-row">
              <input type="text" placeholder="First name" />
              {/* <input type="text" placeholder="Last name" /> */}
            </div>

            <div className="signup-form-row">
              <input type="text" placeholder="First name" />
              {/* <input type="text" placeholder="Last name" /> */}
            </div>
            <div className="signup-form-row">
              <input type="email" placeholder="example@emal.com" />
            </div>
            {/* <div className="signup-form-row">
              <input type="password" placeholder="password" />
              <input type="password" placeholder="confirm password" />
            </div> */}
            
            <div className="signup-form-row">
              <button>Update Account</button>
            </div>
            <div className="signup-form-row">
              <i>
              <FaArrowLeft/> &nbsp;
              <Link to="/login">Back to settings page</Link>
              </i>
             
            </div>
          </div>
        </form>
      </div>
        {/* end of edit profile  */}
        <Footer/>
    </div>
  )
}

export default EditProfile