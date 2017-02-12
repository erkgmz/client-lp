import React from 'react';

import styles from  '../styles/_Thanks.scss';

const Thanks = () => {
  return (
    <section className={styles.Thanks}>
      <div className={styles.innerWrapper}>
        <h2>Thanks!</h2>
        <p>Your message has been sent. I'll be in touch as soon as possible.</p>
      </div>
    </section>
  );
};

export default Thanks;
