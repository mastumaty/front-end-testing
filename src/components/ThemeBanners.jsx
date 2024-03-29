import React from 'react'
import Categories from './Categories'

const ThemeBanners = ({ id, name, color, desc, categories }) => {
    const newname = name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\ /g,"-").replace('--','-');
  return (
    <div id={newname} className='theme-container'>
        <div className="theme-separator">
            <h4>{name}</h4>
            <div className={'separator ' + color}></div>
            <span className='theme-desc'>
                {desc}
            </span>
        </div>
        {categories.map((category) => (
            <Categories
                id={category.id}
                image={category.image}
                title={category.title}
                desc={category.description}
                themekey={category.theme}
                themeid={id}
            />
        ))}
        <div className={'separator ' + color}></div>
    </div>
  )
}

export default ThemeBanners