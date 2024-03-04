import React from 'react';
import arrowright from '../assets/icons/arrow-right.svg';

const Categories = ({ id, image, title, desc, themekey, themeid }) => {
  var orientation = "align-left";
  
  if (themekey == themeid) {
    console.log(id);
    if(id % 2) {
      orientation = 'align-right';
    }
    return (
      <div className='category-container'>
        <div className={"category-image " + orientation}>
          <img src={image} alt="" />
        </div>
        <div className="category-text">
          <h3>{title}</h3>
          <p>{desc}</p>
          <a className='button-details' href="#">
            <span>View details</span>
            <img src={arrowright} alt="" />
          </a>
        </div>
    </div>
    )
  }
}

export default Categories