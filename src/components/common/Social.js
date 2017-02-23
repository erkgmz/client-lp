import React, {PropTypes} from 'react';

const Social = props => {
  return (
    <p>

      <a href={props.href}
        target="_blank"
        rel="noopener noreferrer">
        <i className={`fa ${props.faClass}`} aria-hidden="true" />
        {props.label}
      </a>
    </p>
  );
};

Social.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  faClass: PropTypes.string.isRequired
};

export default Social;
