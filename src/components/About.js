import React from 'react';

import styles from '../styles/_About.scss';

const About = () => {
  return (
    <section className={styles.About}>
      <div className={styles.innerWrapper}>
        <h2>ABOUT MEEE!!!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar,
        dolor ac pulvinar pharetra, lorem nunc luctus libero, id bibendum neque arcu
        nec metus. Curabitur rutrum lobortis dui, at pellentesque dui semper sit
        amet. Quisque accumsan, arcu a laoreet tristique, justo tortor porttitor
        velit, in faucibus neque orci tempus felis.</p>
      </div>
    </section>
  );
};

export default About;
