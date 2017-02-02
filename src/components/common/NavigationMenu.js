import React from 'react';
import { Link, IndexLink } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import Radium from 'radium';

import styles from '../../styles/_NavigationMenu.scss';

let RadiumLink = Radium(Link);
let RadiumIndexLink = Radium(IndexLink);

class NavigationMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.hamburgerStyle = {
      bmBurgerButton: {
        position: 'fixed',
        width: '24px',
        height: '20px',
        right: '2rem',
        top: '1.7rem'
      },
      bmBurgerBars: {
        background: '#64FFDA'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
        right: '2rem'
      },
      bmCross: {
        marginRight: '2rem',
        height: '24px',
        background: 'rgba(0, 0, 0, .8)'
      },
      bmMenu: {
        background: '#64FFDA',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: '1',
        left: '0'
      }
    };
  }

  render() {
    return (
      <Menu
        right
        isOpen={false}
        width={220}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        styles={this.hamburgerStyle}>
        <main id="page-wrap">
          <ul className={styles.NavigationMenu}>
            <li>
              <RadiumIndexLink
                to="/"
                activeClassName={styles.active}>
                HOME
              </RadiumIndexLink>
            </li>

            <li>
              <RadiumLink
                to="/about"
                activeClassName={styles.active}>
                ABOUT
              </RadiumLink>
            </li>

            <li>
              <RadiumLink
                to="/work"
                activeClassName={styles.active}>
                WORK
              </RadiumLink>
            </li>

            <li>
              <RadiumLink
                to="/contact"
                activeClassName={styles.active}>
                CONTACT
              </RadiumLink>
            </li>
          </ul>
        </main>
      </Menu>
    );
  }
}

export default NavigationMenu;
