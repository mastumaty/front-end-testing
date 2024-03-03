import React from 'react'

const ThemesLink = ({ name }) => {
  return (
    <div>
        <a href={name}>{name}</a>
    </div>
  )
}

export default ThemesLink