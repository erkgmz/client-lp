import React from 'react';
import Social from '../common/Social';

import styles from '../../styles/_Footer.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h4>Connect with me</h4>
      <ul className={styles.socialNavigation}>
        <li>
          <Social
            href="https://twitter.com/kaileystein"
            label="Twitter"
            faClass="fa-twitter-square" />
        </li>
        <li>
          <Social
            href="https://www.linkedin.com/in/kaileystein/"
            label="LinkedIn"
            faClass="fa-linkedin-square" />
        </li>
        <li>
          <Social
            href="https://www.instagram.com/kailey.stein/"
            label="Instagram"
            faClass="fa-instagram" />
        </li>
      </ul>
      <p className={styles.referral}>Designed & Developed at <a href="https://goo.gl/DlKT53">erikgomez.co</a></p>
    </footer>
  );
};

export default Footer;
