import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 55 }}
        style={{ height: 200, width: 200 }}
      >
        <div className='Tilt-inner pa3'>
          <img className='pt4' src={brain} alt='Logo' />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
