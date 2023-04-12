import React from 'react';
import "./About.css";
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';

const About = () => {
  return (
    <div>
        <Header/>
        {/* start of about page */}
        <div class="about">
            <h3>About SMA blog - Nigeria News</h3>
            <p> CMA is Nigeria’s no. 1 online and entertainment news publisher by audience, 
                meeting the news needs of over 10 million unique readers monthly via our website. 
                We publish various news and editorial content, including entertainment, business, politics, 
                current affairs, and human interest stories. Our team of experienced journalists brings our 
                readers the day's most important news stories. We cover breaking news and provide in-depth 
                coverage of events and unique stories across Nigeria and worldwide. SMA blog was founded in 
                2023 and has grown into a widely read news and entertainment website with over 50 million 
                monthly views. We are the world’s largest news publisher on Facebook, leading the way 
                through news amongst other globally acclaimed international publishers.  
                January: SMA blog becomes the number one Facebook news media publisher in the world.
                February: SMA blog wins the Humanitarian Service Company award of the year from Nigerian Media Nite Out Award. 
                </p>
        </div>


        {/* end of about page */}
        <Footer/>   
      
    </div>
  )
}

export default About
