import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header>
        <div className='wrapper'>
            <p className='course-name'>Sound Design Masterclass</p>
            <h1>Learn thr Art of Sound Design</h1>
            <a href='#' className='#demo-btn'>
                Demo Lesson
            </a>
        </div>
    </header>
  );
};

export default Header;