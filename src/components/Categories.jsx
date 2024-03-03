import React from 'react'

const Categories = () => {
  return (
    <div className='category-container text-left'>
        <div className="category-image">
          <img src="../assets/img/banner-01.png" alt="" />
        </div>
        <div className="category-text">
          <h3>Toys perfect for birthday gift-giving season in Spring</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
          <a className='button-details' href="#">
            <span>View details</span>
            <img src="../assets/icons/chevron-right.svg" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Categories