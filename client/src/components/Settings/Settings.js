import React from 'react';
import Footer from '../Partials/Footer/Footer';
import Header from '../Partials/Header/Header';
import "./Settings.css";
import { Link } from 'react-router-dom';
import { FaUserEdit, FaUserShield, FaUserLock } from 'react-icons/fa';



const Settings = () => {
  return (
    <div>
        <Header/>
        {/* start of settings */}
        <section className='settings_wrapper Edit_profile_col'>
            <div className='settings_col_1'>
                <div className='edit_profile_row_1'>Profile</div>
                <div className='edit_profile_row_2'>
                    <FaUserEdit className='setting_icon_grp'/>
                </div>
                <div className='edit_profile_row_3'>
                    <Link to="/profile/edit">Edit Profile</Link>
                </div>
            </div>

            {/* ---------------------- */}
            <div className='settings_col_2 change_password_col'>
            <div className='change_password_row_1'>Password</div>
                <div className='change_password_row_2'>
                    <FaUserLock className='setting_icon_grp'/>
                </div>
                <div className='edit_profile_row_3'>
                    <Link to="/profile/password">Change Password</Link>
                </div>
            </div>

            {/* ---------------------- */}
            <div className='settings_col_3 delete_account_col'>
            <div className='delete_account_row_1'>Account</div>
                <div className='delete_account_row_2'>
                    <FaUserShield className='setting_icon_grp'/>
                </div>
                <div className='delete_profile_row_3'>
                    <Link to="/profile/delete-account">Delete Account</Link>
                </div>
            </div>
        </section>


        {/* end of settings */}
        <Footer/>
    </div>
  )
}

export default Settings