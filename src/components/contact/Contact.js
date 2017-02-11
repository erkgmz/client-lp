import React, {Component} from 'react';
import ContactForm from './ContactForm';

import {postMessage} from '../../api/contactApi';

import styles from '../../styles/_Contact.scss';

class Contact extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      email: '',
      message: '',
      subject: 'Project Management',
      error: 'Please enter your name'
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  checkEmptyField(field) {
    if(field === '') {
      return false;
    } else {
      return true;
    }
  }

  validNameField() {
    const validName = this.checkEmptyField(this.state.name);

    if(validName) {
      return true;
    } else {
      this.setState({error: 'Please enter your name'});
      return false;
    }
  }

  validEmailField() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = reg.test(this.state.email);

    if( validEmail ) {
      return true;
    } else {
      this.setState({error: 'Please enter your email'});
      return false;
    }
  }

  validMessageField() {
    const validMessage = this.checkEmptyField(this.state.message);

    if(validMessage) {
      return true;
    } else {
      this.setState({error: 'Please enter a message'});
      return false;
    }
  }

  onChange(event){
    event.preventDefault();

    if(event.target.name === 'name') {
      this.setState({ name: event.target.value });
    }

    if(event.target.name === 'email') {
      this.setState({ email: event.target.value });
    }

    if(event.target.name === 'message') {
      this.setState({ message: event.target.value });
    }

    if(event.target.name === 'subject') {
      this.setState({ subject: event.target.value });
    }

    this.validMessageField();
    this.validEmailField();
    this.validNameField();
  }

  onClick(event) {
    event.preventDefault();

    const validateForm = this.validMessageField() || this.validEmailField() || this.validNameField();

    if(validateForm) {
      const {name, email, subject, message} = this.state;
      const data = {name, email, subject, message};

      postMessage(data)
        .then(response => alert('Your message has been sent')) //eslint-disable-line
        .catch(error => alert('Something went wrong. Try again.')); //eslint-disable-line
    } else {
      alert(this.state.error);
      console.log(this.state);
    }
  }

  render() {
    return (
      <section className={styles.Contact}>
        <div className={styles.innerWrapper}>
          <h3>Send me a message!</h3>
          <ContactForm
            onClick={this.onClick}
            onChange={this.onChange}
            subjectValue={this.state.subject} />
        </div>
      </section>
    );
  }
}

export default Contact;
