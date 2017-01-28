import React from 'react';
// import Social from './Social';

const Contact = () => {
  return (
    <div>
      <h3>Send me a message!</h3>
      {/*<Social />*/}
      <form>
        <label htmlFor="">First Name:
          <input type="text" name="name" />
        </label>
        <label htmlFor="">Email:
          <input type="email" name="email" />
        </label>
        <label htmlFor="">Email:
          <textarea type="text" name="message"></textarea>
        </label>
      </form>
    </div>
  );
};

export default Contact;
