import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import BannerTop from './components/BannerTop'
import Categories from './components/Categories'
import NavMenu from './components/NavMenu'

function App() {
  const [count, setCount] = useState(0);

  const themes = [
    { id: 1, name: "Gifting", color: "#EE7500", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Travel", color: "#00963E", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, name: "Adults Welcome", color: "#006CB7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, name: "Art & Home Décor", color: "#E0E0E0", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 5, name: "Space", color: "#000000", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 6, name: "Pop Culture", color: "#FC36A5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 7, name: "Toddlers", color: "#FC36A5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 8, name: "Real World Role Playing", color: "#E3000B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const categories = [
    { id: 1, title: "Toys perfect for birthday gift-giving season in Spring", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 2, title: "Gifts for Mom", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 3, title: "Travel the world no matter where you are. No Passport needed.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 4, title: "Fun accessories to take with you on your travels or keep kids entertained", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 5, title: "For the Kids at Heart who love to unplug, unbox and unwind", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 6, title: "Playful ideas for refreshing your space while tapping into your more creative side", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 7, title: "Capture the wonders of space and exploration", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 8, title: "Recreate scenes from your favorite movies and TV series", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 9, title: "Waterproof toys for toddlers and beyond", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 10, title: "xx TBD", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 11, title: "Celebrating the everyday heroes", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
    { id: 12, title: "xxxxx TBD", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat." },
  ];

  return (
    <>
      <div>
        <Header themes={themes} />
        <NavMenu />
        <BannerTop />
        <div className="container">
        {themes.map((theme) => (
          <Categories
            key={theme.id}
            name={theme.name}
            color={theme.color}
            desc={theme.description}
          />
        ))}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
