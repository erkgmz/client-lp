import React from 'react';
import { Link } from 'react-router';
// import Navigation from './Navigation';

import style from '../../styles/_Header.scss';

const Header = () => {
  return (
    <header className={style.Header}>
    <div className={style.innerWrapper}>
      <h2>
        <Link to="/">Kailey Stein</Link>
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
