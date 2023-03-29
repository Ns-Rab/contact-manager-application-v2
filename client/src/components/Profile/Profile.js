import React from 'react';
import "./Profile.css";
import Header from '../Partials/Header/Header';
import Footer from '../Partials/Footer/Footer';
import { FaTrash, FaEdit, FaPlusSquare, FaTools, FaArrowRight, FaEnvelope, FaPhone } from 'react-icons/fa';
import ProfilePhoto from "../../assets/Salihuma passport.jpg";
import {Link} from "react-router-dom";


const Profile = () => {
  return (
    <React.Fragment>
        <Header/>
        <div className='profile_wrapper'>
            <div className='profile_col_1'>
                <div className='profile_col_1-sub_1'>
                <img src={ProfilePhoto} alt=''/>
                </div>
                <div className='profile_col_1-sub_2'>
                    Salihu Muhammadurabiu
                </div>
                <div className='profile_col_1-sub_3'>
                    3/29/2023 &bull; 10:22 am
                </div>
                <div className='profile_col_1-sub_4'>
                    <Link to="/profile/settings"><FaTools/>Settings</Link>
                    <Link to="/profile/logout"><FaArrowRight/>Logout</Link>
                </div>
            </div>
            <div className='profile_col_2'>
                <div className='profile_col_2_sub_1'>
                    <form action='' method='get'>
                        <div className='search_box'>
                            <input type="search" name='' id='' placeholder='Find Contact'/>                        </div>
                    </form>
                    
                    <div className='number_of_contact_box'>108 Contacts</div>
                    <div className='add_contact_box'>
                        <Link to="/profile/contact/add">
                            <FaPlusSquare/> Add Contact
                        </Link>
                    </div>
                </div>
                <div className='profile_col_2_sub_2'>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Salihu Muhammadurabiu</div>
                        <div className='contact_box_item'>
                            <a href='mailto:salihumagmail.com'><FaEnvelope/>Send Email</a>
                        </div>
                        <div className='contact_box_item'><FaPhone/>08035924823</div>
                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>
                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Salihu Muhammadurabiu</div>
                        <div className='contact_box_item'>
                            <a href='mailto:salihumagmail.com'><FaEnvelope/>Send Email</a>
                        </div>
                        <div className='contact_box_item'><FaPhone/>08035924823</div>
                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>
                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Salihu Muhammadurabiu</div>
                        <div className='contact_box_item'>
                            <a href='mailto:salihumagmail.com'><FaEnvelope/>Send Email</a>
                        </div>
                        <div className='contact_box_item'><FaPhone/>08035924823</div>
                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>
                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Salihu Muhammadurabiu</div>
                        <div className='contact_box_item'>
                            <a href='mailto:salihumagmail.com'><FaEnvelope/>Send Email</a>
                        </div>
                        <div className='contact_box_item'><FaPhone/>08035924823</div>
                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>
                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Salihu Muhammadurabiu</div>
                        <div className='contact_box_item'>
                            <a href='mailto:salihumagmail.com'><FaEnvelope/>Send Email</a>
                        </div>
                        <div className='contact_box_item'><FaPhone/>08035924823</div>
                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>
                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Salihu Muhammadurabiu</div>
                        <div className='contact_box_item'>
                            <a href='mailto:salihumagmail.com'><FaEnvelope/>Send Email</a>
                        </div>
                        <div className='contact_box_item'><FaPhone/>08035924823</div>
                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>
                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Salihu Muhammadurabiu</div>
                        <div className='contact_box_item'>
                            <a href='mailto:salihumagmail.com'><FaEnvelope/>Send Email</a>
                        </div>
                        <div className='contact_box_item'><FaPhone/>08035924823</div>
                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>
                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='contact_box'>
                        <div className='contact_box_item'>Salihu Muhammadurabiu</div>
                        <div className='contact_box_item'>
                            <a href='mailto:salihumagmail.com'><FaEnvelope/>Send Email</a>
                        </div>
                        <div className='contact_box_item'><FaPhone/>08035924823</div>
                        <div className='contact_box_action_grp'>
                            <button className='edit_btn'>
                                <FaEdit/>
                                Edit
                            </button>
                            <button className='delete_btn'>
                                <FaTrash/>
                                Delete
                            </button>
                        </div>
                    </div>
                   
                    
                </div>
                
            </div>

        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Profile