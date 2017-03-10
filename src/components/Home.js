import React from 'react';

import styles from  '../styles/_Home.scss';

import ContactButton from './common/ContactButton';

const Home = () => {
  return (
    <section className={styles.Home}>
      <div className={styles.copyBlock}>
        <h4>This site is currently under development.</h4>
        <p>I am currently unavailable for marketing projects. Check me out on <a href="https://www.linkedin.com/in/kaileystein/">LinkedIn</a> or send me a message.</p>
        <ContactButton />
      </div>
    </section>
  );
};

export default Home;
