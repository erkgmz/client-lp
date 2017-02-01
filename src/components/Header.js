import React from 'react';
// import Navigation from './Navigation';

import style from '../styles/_Header.scss';

const Header = () => {
  return (
    <header className={style.Header}>
    <div className={style.innerWrapper}>
      <h2>
        <a href="#">Kailey Stein</a>
      </h2>

      <a>HAM</a>

      {/*<nav>
        <Navigation />
      </nav>*/}
    </div>
    </header>
  );
};

export default Header;
