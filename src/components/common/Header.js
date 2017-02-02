import React from 'react';
import { Link } from 'react-router';
import NavigationMenu from './NavigationMenu';

import style from '../../styles/_Header.scss';

/* TODO: Major refactoring required for integration of react-hamburger-menu */

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.innerWrapper}>
        <h2>
          <Link to="/">Kailey Stein</Link>
        </h2>

        <NavigationMenu />
      </div>
    </header>
  );
};

export default Header;
