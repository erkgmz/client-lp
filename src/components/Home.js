import React from 'react';

import styles from  '../styles/_Home.scss';

import MainCta from './MainCta';

const Home = () => {
  return (
    <section className={styles.Home}>
      <div className={styles.innerWrapper}>
        <h1>Hi! I'm Kailey</h1>
        <h4>Marketing Professional & Launch Strategist in Bakersfield, CA.</h4>
        <MainCta href="#" text="CONTACT" />
      </div>
    </section>
  );
};

export default Home;
