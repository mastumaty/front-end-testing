import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import BannerTop from './components/BannerTop';
import Categories from './components/Categories';
import NavMenu from './components/NavMenu';
import ScrollToAnchor from './components/ScrollToAnchor';

import banner1 from './assets/img/banner-01.png';
import banner2 from './assets/img/banner-02.png';
import banner3 from './assets/img/banner-03.png';
import banner4 from './assets/img/banner-04.png';
import banner5 from './assets/img/banner-05.png';
import banner6 from './assets/img/banner-06.png';
import banner7 from './assets/img/banner-07.png';
import banner8 from './assets/img/banner-08.png';
import banner9 from './assets/img/banner-09.png';
import banner10 from './assets/img/banner-10.png';
import banner11 from './assets/img/banner-11.png';
import banner12 from './assets/img/banner-12.png';
import ThemeBanners from './components/ThemeBanners';

function App() {
  const [count, setCount] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    document.getElementsByTagName("body")[0].classList.toggle("hidden");
    setIsActive(current => !current);
  };

  const themes = [
    { id: 1, name: "Gifting", color: "orange", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Travel", color: "green", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, name: "Adults Welcome", color: "blue", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, name: "Art & Home Décor", color: "lightgray", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, name: "Space", color: "black", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 6, name: "Pop Culture", color: "pink", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 7, name: "Toddlers", color: "yellow", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, name: "Real World Role Playing", color: "red", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const categories = [
    { id: 1, image: banner1, title: "Toys perfect for birthday gift-giving season in Spring", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 1 },
    { id: 2, image: banner2, title: "Gifts for Mom", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 1 },
    { id: 3, image: banner3, title: "Travel the world no matter where you are. No Passport needed.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 2 },
    { id: 4, image: banner4, title: "Fun accessories to take with you on your travels or keep kids entertained", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 2 },
    { id: 5, image: banner5, title: "For the Kids at Heart who love to unplug, unbox and unwind", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 3 },
    { id: 6, image: banner6, title: "Playful ideas for refreshing your space while tapping into your more creative side", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 4 },
    { id: 7, image: banner7, title: "Capture the wonders of space and exploration", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 5 },
    { id: 8, image: banner8, title: "Recreate scenes from your favorite movies and TV series", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 6 },
    { id: 9, image: banner9, title: "Waterproof toys for toddlers and beyond", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 7 },
    { id: 10, image: banner10, title: "xx TBD", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 7 },
    { id: 11, image: banner11, title: "Celebrating the everyday heroes", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 8 },
    { id: 12, image: banner12, title: "xxxxx TBD", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.", theme: 8 },
  ];

  return (
    <>
      <div>
        <Header themes={themes} onClick={handleClick} />
        <div className="header-mobile-space display-only-mobile"></div>
        <NavMenu themes={themes} active={isActive} onClick={handleClick} />
        <BannerTop />
        <div id="page-content" className="container">
          {themes.map((theme) => (
            <ThemeBanners
              id={theme.id}
              name={theme.name}
              color={theme.color}
              desc={theme.description}
              categories={categories}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
