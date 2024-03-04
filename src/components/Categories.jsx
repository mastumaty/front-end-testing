import React from 'react';

const Categories = ({ id, image, title, desc, themekey, themeid }) => {
  var orientation = "align-left";
  
  if (themekey == themeid) {
    console.log(id);
    if(id % 2) {
      orientation = 'align-right';
    }
    return (
      <div className={'category-container ' + orientation}>
        <div className="category-image">
          <img src={image} alt="" />
        </div>
        <div className="category-text">
          <h3>{title}</h3>
          <p>{desc}</p>
          <a className='button-details' href="#">
            <span>View details</span>
            <img src="../assets/icons/chevron-right.svg" alt="" />
          </a>
        </div>
    </div>
    )
  }
}

export default Categories