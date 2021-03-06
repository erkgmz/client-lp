import React, {Component} from 'react';
import {hashHistory} from 'react-router';
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
      subject: 'Question',
      error: 'Please enter your name',
      sending: false
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  validNameField() {
    const validName = this.state.name !== '';

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

    if(validEmail) {
      return true;
    } else {
      this.setState({error: 'Please enter your email'});
      return false;
    }
  }

  validMessageField() {
    const validMessage = this.state.message !== '';

    if(validMessage) {
      return true;
    } else {
      this.setState({error: 'Please enter a message'});
      return false;
    }
  }

  onSuccess(response) {
    const {statusCode} = response.response;

    this.setState({sending: false});

    if(statusCode === 202) {
      hashHistory.push('/thanks');
    }
  }

  handleError(error) {
    const {statusCode} = error.response;

    this.setState({sending: false});

    if(statusCode === 415) {
      return alert('Something went wrong. Try again.');
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

    if(this.validMessageField() && this.validEmailField() && this.validNameField()) {
      const {name, email, subject, message} = this.state;
      const data = {name, email, subject, message};

      this.setState({sending: true});

      postMessage(data)
        .then(response => this.onSuccess(response))
        .catch(error => this.handleError(error));
    } else {
      this.setState({sending: false});
      alert(this.state.error);
    }
  }

  render() {
    return (
      <section className={styles.Contact}>
        <div className={styles.innerWrapper}>
          <h3>Contact Me</h3>
          <ContactForm
            onClick={this.onClick}
            onChange={this.onChange}
            subjectValue={this.state.subject}
            buttonLabel={this.state.sending ? 'SENDING' : 'SEND'} />
        </div>
      </section>
    );
  }
}

export default Contact;
