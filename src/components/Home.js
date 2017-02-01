import React from 'react';

import styles from  '../styles/_Home.scss';

import ContactButton from './common/ContactButton';

const Home = () => {
  return (
    <section className={styles.Home}>
      <div className={styles.copyBlock}>
        <h1>Hi! I'm Kailey</h1>
        <h4>Marketing Professional & Launch Strategist in Bakersfield, CA.</h4>
        <ContactButton />
      </div>
    </section>
  );
};

export default Home;
