import React from 'react';

import volumex from '../assets/icons/volume-x.svg';
import file from '../assets/icons/file-text.svg';

const BannerTop = () => {
  return (
    <div id='banner-top'>
        <div className="banner-image">
            <div className="banner-placeholder">
                <span>&lt;video autoplay with no sound&gt;</span>
            </div>
        </div>
        <div className="banner-buttons">
            <a className="button-sound" href="#">
                <img src={volumex} alt="" />
            </a>
            <a className="button-video" href="#">
                <img src={file} alt="" />
            </a>
        </div>
        <h1>Welcome to the Play Matters Interactive Lookbook</h1>
    </div>
  )
}

export default BannerTop