import React from 'react';
import ContactForm from './ContactForm';

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      email: '',
      message: ''
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
