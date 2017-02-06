import React from 'react';
import ContactForm from './ContactForm';

import {postMessage} from '../../api/contactApi';

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      email: '',
      message: '',
      subject: ''
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

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
      <section>
        <h3>Send me a message!</h3>
        <ContactForm onClick={this.onClick} onChange={this.onChange} />
      </section>
    );
  }
}

export default Contact;
