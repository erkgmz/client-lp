import React from 'react';
import ContactForm from './ContactForm';

import {postMessage} from '../../api/contactApi';

import styles from '../../styles/_Contact.scss';

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: 'Name',
      email: 'Email',
      message: 'Enter a message',
      subject: ''
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  // componentWillMount() {}

  onChange(event){
    event.preventDefault();

    console.log('Changed'); //eslint-disable-line
  }

  onClick(event) {
    event.preventDefault();

    postMessage()
    .then(response => console.log(response)) //eslint-disable-line
    .catch(error => console.log(error)); //eslint-disable-line

    console.log('Clicked'); //eslint-disable-line
  }

  render() {
    return (
      <section className={styles.Contact}>
        <div className={styles.innerWrapper}>
          <h3>Send me a message!</h3>
          <ContactForm
            onClick={this.onClick}
            onChange={this.onChange} />
        </div>
      </section>
    );
  }
}

export default Contact;
