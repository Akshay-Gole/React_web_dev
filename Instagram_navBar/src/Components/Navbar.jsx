import React from 'react'
import '../Styles/Navbar.scss'
import insta from "../Img/insta.png"
import { UilInstagram, UilEstate, UilSearch, UilCompass, UilCommentEdit, UilHeart, UilImagePlus, UilUserCircle, UilBars } from '@iconscout/react-unicons'


function Navbar() {
    return (
        <nav className='navbar'>

            <div className="logo">
                < UilInstagram className="insta-icon" size="30" />
                <img src={insta} alt="insta_img" />
            </div>

            <div className="navbar-menu">
                <div className="menu-items">
                    < UilEstate className="menu-icon" size="30" />
                    <p className='menu-name'>Home</p>
                </div>
                <div className="menu-items">
                    < UilSearch className="menu-icon" size="30" />
                    <p className='menu-name'>Search</p>
                </div>
                <div className="menu-items">
                    < UilCompass className="menu-icon" size="30" />
                    <p className='menu-name'>Explore</p>
                </div>
                <div className="menu-items">
                    < UilCommentEdit className="menu-icon" size="30" />
                    <p className='menu-name'>Messages</p>
                </div>
                <div className="menu-items">
                    < UilHeart className="menu-icon" size="30" />
                    <p className='menu-name'>Notification</p>
                </div>
                <div className="menu-items">
                    < UilImagePlus className="menu-icon" size="30" />
                    <p className='menu-name'>Create</p>
                </div>
                <div className="menu-items">
                    < UilUserCircle  className="menu-icon" size="30" />
                    <p className='menu-name'>Profile</p>
                </div>
            </div>

            <div className="more">
                <div className="menu-items">
                    < UilBars className="menu-icon" size="30" />
                    <p className='menu-name'>Profile</p>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar