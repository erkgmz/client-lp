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
        <select
          value={props.subjectValue}
          name="subject"
          onChange={props.onChange}>
          <option value="Question">Question</option>
          <option value="Project Management">Project Management</option>
          <option value="Launch Strategy">Launch Strategy</option>
          <option value="Marketing Campaigns">Marketing Campaigns</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label htmlFor="message">Message:
        <textarea
          type="text"
          name="message"
          rows="3"
          onChange={props.onChange} />
      </label>

      <input
        type="submit"
        value={props.buttonLabel}
        onClick={props.onClick} />
    </form>
  );
};

ContactForm.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  subjectValue: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  styles: PropTypes.object
};

export default ContactForm;
