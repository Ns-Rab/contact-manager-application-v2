import React from 'react';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import "./ContactAdd.css";
import { Link } from 'react-router-dom';

const ContactAdd = () => {
  return (
    <div>
      <Header/>
        {/*start of contact address  */}
        <div class="main-cont">
        <div class="head">
        Contact us 
        </div>

        <div className="sub-main">
            For General Enquiries
        </div>
        <div className="lower"><b>Phone number:</b> 08130967130</div>
        <div className="lower"><b>Email:</b> Salihuma@gmail.com</div>

        <div className="sub-main">
            For Ads Enquiry, contact our Sales and Marketing Team Read more
        </div>
        <div className="lower"><b>Phone number:</b> 09037730357</div>    
        <div className="lower"><b>RS number:</b>1154497</div>    
        <div className="lower"><b>Email:</b> ads@corp.sma.ng</div>    
        <div className="lower"><b>Address:</b> Saburi 1,Ladipo Kuku Street, Allen Avenue, Abuja</div>    

        <div className="sub-main">
            Follow us on our social media platforms:
        </div> 
        <div className="">
            <ul>
                <li><Link to="/facebook" className="cont-links">Facebook</Link></li>
                <li><Link to="/instagram" className="cont-links">Instagram</Link></li>
                <li><Link to="/twitter" className="cont-links">Twitter</Link></li>
                <li><Link to="/telegram" className="cont-links">Telegram</Link></li>
                <li><Link to="/youtube" className="cont-links">Youtube</Link></li>
                <li><Link to="/tiktok" className="cont-links">TikTok</Link></li>
            </ul>
        </div> 
    </div>

        {/*end of contact address  */}
      <Footer/>
    </div>
  )
}

export default ContactAdd
