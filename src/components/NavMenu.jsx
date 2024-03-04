import React from 'react'

import logo from '../assets/img/logo.png';
import cat1 from '../assets/img/cat-1.png';
import cat2 from '../assets/img/cat-2.png';
import cat3 from '../assets/img/cat-3.png';
import cat4 from '../assets/img/cat-4.png';
import cat5 from '../assets/img/cat-5.png';
import cat6 from '../assets/img/cat-6.png';
import cat7 from '../assets/img/cat-7.png';
import cat8 from '../assets/img/cat-8.png';
import cat9 from '../assets/img/cat-9.png';
import catbg from '../assets/img/cat-bg.png';

import x from '../assets/icons/x.svg';
import home from '../assets/icons/home.svg';
import contact from '../assets/icons/message-circle.svg';
import request from '../assets/icons/shoppingbag.svg';
import ThemesLink from './ThemesLink';

const themesImg = [
  { image: cat1, title: "Architecture" },
  { image: cat2, title: "City" },
  { image: cat3, title: "Creator" },
  { image: cat4, title: "Dots" },
  { image: cat5, title: "Duplo" },
  { image: cat6, title: "Friends" },
  { image: cat7, title: "Ideas" },
  { image: cat8, title: "Minifigures" },
  { image: cat9, title: "Technic" },
];

const NavMenu = ({ themes, active, onClick }) => {
  return (
    <div id='nav-menu' className={active ? 'nav-show' : 'nav-hide'}>
        <div className="nav-links">
          <div className="links-header">
            <a className='logo' href="#">
                <img src={logo} alt="" />
            </a>
            <button className='close' onClick={onClick}>
                <img src={x} alt="" />
            </button>
          </div>
          <div className="nav-info">
            <a className='home-link' href="#">
                <img src={home} alt="" />
                <span>Home</span>
            </a>
            <a className='request-link' href="#">
                <img src={request} alt="" />
                <span>Request</span>
            </a>
            <a className='contact-link' href="#">
                <img src={contact} alt="" />
                <span>Contact Us</span>
            </a>
          </div>
          <div className="nav-themes">
            <div className='separator'><span>Themes</span></div>
            <div className="nav-theme-links">
              {themes.map((theme) => (
                <ThemesLink
                name={theme.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="theme-images">
          {themesImg.map((theme) => (
            <div className="theme-item">
              <a className='theme-link' href="#">
                <img src={theme.image} alt={theme.title}></img>
              </a>
            </div>
          ))}
        </div>
    </div>
  )
}

export default NavMenu