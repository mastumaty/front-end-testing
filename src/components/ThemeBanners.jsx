import React from 'react'
import Categories from './Categories'

const ThemeBanners = ({ id, name, color, desc, categories }) => {
  return (
    <div id={name} className='theme-container'>
        <div className="theme-separator">
            <h4>{name}</h4>
            <div className={'separator' + color}></div>
            <span className='theme-desc'>
                {desc}
            </span>
            {categories.map((category) => (
                <Categories
                    image={category.image}
                    title={category.title}
                    desc={category.description}
                    themekey={category.theme}
                    themeid={id}
                />
                
            ))}
        </div>
    </div>
  )
}

export default ThemeBanners