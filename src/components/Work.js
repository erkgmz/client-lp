import React from 'react';

import styles from '../styles/_Work.scss';

const Work = () => {
  return (
    <section className={styles.Work}>
      <div className={styles.innerWrapper}>
        <h2>Work</h2>
        <p>I've planned and implemented large campaign strategies, and product launches</p>
        <div>
          <img src="http://fpoimg.com/300x250" />
          <h3>Project Management</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu purus,
          convallis a metus non, egestas varius dui. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla ut neque vulputate, interdum felis vestibulum, dictum sem.
          Cras euismod justo vel rhoncus euismod.</p>
        </div>
        <div>
          <img src="http://fpoimg.com/300x250" />
          <h3>Launch Strategy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu purus,
          convallis a metus non, egestas varius dui. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla ut neque vulputate, interdum felis vestibulum, dictum sem.
          Cras euismod justo vel rhoncus euismod.</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
