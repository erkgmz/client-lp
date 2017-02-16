import React from 'react';

import pmPhoto from '../assets/teamwork.png';
import launchPhoto from '../assets/launch.png';
import campaignPhoto from '../assets/campaigns.jpg';

import styles from '../styles/_Work.scss';

const Work = () => {
  return (
    <section className={styles.Work}>
      <div className={styles.innerWrapper}>
        <h2>Work</h2>
        <p>I've planned and implemented large campaign strategies, and product launches</p>
        <div className={styles.services}>
          <article>
            <img src={pmPhoto} />
            <h3>Project Management</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu purus,
            convallis a metus non, egestas varius dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla ut neque vulputate, interdum felis vestibulum, dictum sem.
            Cras euismod justo vel rhoncus euismod.</p>
          </article>
          <article>
            <img src={launchPhoto} />
            <h3>Launch Strategy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu purus,
            convallis a metus non, egestas varius dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla ut neque vulputate, interdum felis vestibulum, dictum sem.
            Cras euismod justo vel rhoncus euismod.</p>
          </article>
          <article>
            <img src={campaignPhoto} />
            <h3>Marketing Campaigns</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu purus,
            convallis a metus non, egestas varius dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla ut neque vulputate, interdum felis vestibulum, dictum sem.
            Cras euismod justo vel rhoncus euismod.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Work;
