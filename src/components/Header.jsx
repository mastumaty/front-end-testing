import React from 'react';

import logo from '../assets/img/logo.png';
import icon from '../assets/img/icon.png';

import contact from '../assets/icons/message-circle.svg';
import request from '../assets/icons/shoppingbag.svg';
import search from '../assets/icons/search.svg';
import ThemesLink from './ThemesLink';


const Header = ({ themes, onClick }) => {
  return (
    <div id='header'>
        <div className="container">
            <div className="header-content">
                <a className='logo' href="#">
                    <img src={logo} alt="" />
                </a>
                <button className='categories-link' onClick={onClick}>
                    <img src={icon} alt="" />
                </button>
                <div className="theme-links">
                    {themes.map((theme) => (
                        <ThemesLink
                            name={theme.name}
                        />
                    ))}
                </div>
                <div className="info-links">
                    <a className='contact-link' href="#">
                        <img src={contact} alt="" />
                        <span>Contact Us</span>
                    </a>
                    <a className='request-link' href="#">
                        <img src={request} alt="" />
                        <span>Request</span>
                    </a>
                    <a className='search-link' href="#">
                        <img src={search} alt="" />
                        <span>Search</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header