import React from 'react'

const ThemesLink = ({ name }) => {
  const newname = name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\ /g,"-").replace('--','-');
  return (
    <div>
        <a className='theme-link' href={'#'+newname}>{name}</a>
    </div>
  )
}

export default ThemesLink