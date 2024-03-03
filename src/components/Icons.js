import React from 'react';

import contact from '../assets/icons/message-circle.svg';
import request from '../assets/icons/shoppingbag.svg';
import search from '../assets/icons/search.svg';
import file from '../assets/icons/file-text.svg';
import arrowright from '../assets/icons/arrow-right.svg';
import volume2 from '../assets/icons/volume-2.svg';
import volumex from '../assets/icons/volume-x.svg';
import x from '../assets/icons/x.svg';


const Icons = {
  contact: contact,
  request: request,
  search: search,
  file: file,
  arrowright: arrowright,
  volume2: volume2,
  volumex: volumex,
  x: x,
}

export default function Icons(props) {
  const Icon = Icons[props.name];
  return <img src={Icon} alt={Icon} />;
}