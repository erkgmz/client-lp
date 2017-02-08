import React, {PropTypes} from 'react';

const ContactForm = props => {
  return (
    <form>
      <label htmlFor="name">First Name:
        <input
          type="text"
          name="name"
          onChange={props.onChange} />
      </label>

      <label htmlFor="email">Email:
        <input
          type="email"
          name="email"
          onChange={props.onChange} />
      </label>

      <label htmlFor="subject">Subject:
        <select name="subject">
          <option value="Project Management">Project Management</option>
          <option value="Launch Strategy">Launch Strategy</option>
          <option value="Marketing Campaigns">Marketing Campaigns</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label htmlFor="message">Message:
        <textarea type="text" name="message" rows="3" onChange={props.onChange} />
      </label>
      <input type="submit" value="SEND" onClick={props.onClick} />
    </form>
  );
};

ContactForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default ContactForm;
