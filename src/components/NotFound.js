import React from 'react';
import { Link } from 'react-router';

import styles from '../styles/_NotFound.scss';

const NotFound = () => {
  return (
    <section className={styles.NotFound}>
      <div className={styles.copyBlock}>
        <h2>Not Found.</h2>
        <p>Try going <Link to="/">here</Link>.</p>
      </div>
    </section>
  );
};

export default NotFound;
