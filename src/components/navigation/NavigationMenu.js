import React from 'react';
import { Link, IndexLink } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import Radium from 'radium';

import styles from '../../styles/_NavigationMenu.scss';

import navItems from './navigationItemsData';
import hamburgerStyles from './hamburgerStyles';

class NavigationMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getIndexLink(item, key) {
    const RadiumIndexLink = Radium(IndexLink);
    return (
      <li key={key}>
        <RadiumIndexLink
          to={item.path}
          activeClassName={styles.active}>
          {item.text}
        </RadiumIndexLink>
      </li>
    );
  }

  getLink(item, key) {
    const RadiumLink = Radium(Link);
    return (
      <li key={key}>
        <RadiumLink
          to={item.path}
          activeClassName={styles.active}>
          {item.text}
        </RadiumLink>
      </li>
    );
  }

  render() {
    return (
      <Menu
        right
        isOpen={false}
        width={220}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        styles={hamburgerStyles}>
        <main id="page-wrap">
          <ul className={styles.NavigationMenu}>
            {navItems.map((item, key) => item.indexRoute ? this.getIndexLink(item, key) : this.getLink(item, key))}
          </ul>
        </main>
      </Menu>
    );
  }
}

export default NavigationMenu;
