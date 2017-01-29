import React from 'react';
// import Navigation from './Navigation';

import style from '../styles/_Header.scss';

const Header = () => {
  return (
    <header className={style.Header}>
      <h2>Kailey Stein</h2>
      <a>HAM</a>
      {/*<nav>
        <Navigation />
      </nav>*/}
    </header>
  );
};

export default Header;
