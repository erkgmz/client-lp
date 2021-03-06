import React from 'react';
import { Link } from 'react-router';

import styles from '../../styles/_ContactButton.scss';

const ContactButton = () => {
  return (
    <Link
      to="/contact"
      className={styles.ContactButton}>
      CONTACT
    </Link>
  );
};

export default ContactButton;
