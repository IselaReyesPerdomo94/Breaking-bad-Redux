import React from 'react';

import EmptyImage from '../../assets/empty.png'

import './style.css';

const EmptyMessage = ({ message }) => {
  return(
    <div className='empty-container'>
      <img src={EmptyImage} alt='no-element-found-it'/>
      <p>{message}</p>
    </div>
  )
};

export default EmptyMessage;