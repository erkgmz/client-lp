import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// import styles from '../styles/MainCta.scss';

const MainCta = props => {
  return (
    // <Link to={props.href}>{props.text}</Link>
    <Link to="www.erikgomez.co">{props.text}</Link>
  );
};

MainCta.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default MainCta;
