import React from 'react';

import logo from '../assets/img/logo.png';
import icon from '../assets/img/icon.png';

import banner01 from '../assets/img/banner-01.png';
import banner02 from '../assets/img/banner-02.png';
import banner03 from '../assets/img/banner-03.png';
import banner04 from '../assets/img/banner-04.png';
import banner05 from '../assets/img/banner-05.png';
import banner06 from '../assets/img/banner-06.png';
import banner07 from '../assets/img/banner-07.png';
import banner08 from '../assets/img/banner-08.png';
import banner09 from '../assets/img/banner-09.png';
import banner10 from '../assets/img/banner-10.png';
import banner11 from '../assets/img/banner-11.png';
import banner12 from '../assets/img/banner-12.png';

import cat1 from '../assets/img/cat-1.png';
import cat2 from '../assets/img/cat-2.png';
import cat3 from '../assets/img/cat-3.png';
import cat4 from '../assets/img/cat-4.png';
import cat5 from '../assets/img/cat-5.png';
import cat6 from '../assets/img/cat-6.png';
import cat7 from '../assets/img/cat-7.png';
import cat8 from '../assets/img/cat-8.png';
import cat9 from '../assets/img/cat-9.png';
import catbg from '../assets/img/cat-bg.png';


const Images = {
  logo: logo,
  icon: icon,
  banner01: banner01,
  banner02: banner02,
  banner03: banner03,
  banner04: banner04,
  banner05: banner05,
  banner06: banner06,
  banner07: banner07,
  banner08: banner08,
  banner09: banner09,
  banner10: banner10,
  banner11: banner11,
  banner12: banner12,
  
  cat1: cat1,
  cat2: cat2,
  cat3: cat3,
  cat4: cat4,
  cat5: cat5,
  cat6: cat6,
  cat7: cat7,
  cat8: cat8,
  cat9: cat9,
  catbg: catbg,
}

export default function Images(props) {
  const Image = Images[props.name];
  return <img src={Image} alt={Image} />;
}