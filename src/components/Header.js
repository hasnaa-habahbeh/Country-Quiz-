import React from 'react';
import headerSVG from '../resources/undraw_adventure_4hum 1.svg';
import '../styles/Header.css';

const Header = () => (
  <div className='header'>
    <h1 className='header-text'>Country Quiz</h1>;
    <img className='header-image' src={headerSVG} alt='header svg' />
  </div>
);

export default Header;
