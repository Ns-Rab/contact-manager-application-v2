import React, {useState} from 'react';
import "./Signup.css";
import Header from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";
import { Link } from 'react-router-dom';
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [termsCondition, setTermsCondition] = useState(false);


  const [error, setError] = useState("");

  

  // send details to backend
  const handleSignup = async (event) => {
    event.preventDefault();
    console.log("signing up...");

    //check for empty
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      // display error message
      setError("All fields are required!")
    }

      //check password match
      if (password !== confirmPassword) {
      // display error message
      setError("passwords doesn't match!");
      }
    


      const userDetails = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };

      //send  details to backend

      try {
        const Backend_URL = "http://localhost:5000/api/users/register";

        const response = await axios.post(Backend_URL, userDetails);
        console.log(response);  

      } catch (error) {
        setError(error.message);
      }
  };

  


  return (
    <React.Fragment>
      <Header/>
      {/* start of signup wrapper */}
      <div className="signup-wrapper">
        <form  onSubmit={handleSignup}>
          <div className="signup-form">
            <div className="signup-form-row form-title">
              SignUp
            </div>
            <div className="signup-form-row form-error-message">
              {error}
            </div> 

            <div className='signup-form-row'>
              <input 
                type="text" 
                placeholder='First name'
                name='firstname'
                onChange={(event)=> setFirstName(event.target.value)}
              />
              <input 
                type="text" 
                placeholder='Last name' 
                name='lastname'
                onChange={(event)=> setLastName(event.target.value)}
              />
            </div>

            <div className='signup-form-row'>
              <input 
                type="email" 
                placeholder='example@mail.com'
                name='email'
                onChange={(event)=> setEmail(event.target.value)}
              />
            </div>

            <div className='signup-form-row'>
              <input 
                type="password" 
                placeholder='password' 
                name='password'
                onChange={(event)=> setPassword(event.target.value)}
              />
              <input type="password" placeholder='confirm password' name='password' onChange={(event)=> setConfirmPassword(event.target.value)}/>
            </div>
            <div className='signup-form-row'>
              <label htmlFor="termsConditions">

                <input type="checkbox" id="termsConditions" required /> 
                I agree to the
                <Link to="/termsConditions">Terms and Condition</Link>
              </label>
            </div>
            

            <div className='signup-form-row'>
              <button type="submit">Create Account</button>
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
    </React.Fragment>
  );
};

export default SignUp;