import React from 'react';

import volumex from '../assets/icons/volume-x.svg';
import file from '../assets/icons/file-text.svg';
import chevronsdown from '../assets/icons/chevrons-down.svg';

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
                <img src={volumex} alt="Toggle Sound" />
            </a>
            <a className="button-video" href="#">
                <img src={file} alt="Download Video" />
            </a>
        </div>
        <div className="top-anchor display-only-desk">
            <a className="top-anchor-link" href="#page-content">
                <span>Scroll down</span>
                <img src={chevronsdown} alt="Scroll down" />
            </a>
        </div>
        <h1>Welcome to the <br/>Play Matters Interactive Lookbook</h1>
    </div>
  )
}

export default BannerTop