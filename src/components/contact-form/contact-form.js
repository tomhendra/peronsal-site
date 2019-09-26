import React, { useState } from 'react';
import { contactFormStyles } from './contact-form-styles';
import { Button } from '../button';

export const ContactForm = () => {
  const initialState = {
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
  };

  const [state, setState] = useState(initialState);

  const handleInputChange = event => {
    console.log(event.target);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(
      `Hello ${state.fullName}, your email address is ${state.emailAddress} & your phone number is ${state.phoneNumber}!`,
    );
  };

  return (
    <form
      css={contactFormStyles}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <label>
        Full name
        <input
          type="text"
          name="fullName"
          value={state.fullName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email address
        <input
          type="text"
          name="emailAddress"
          value={state.emailAddress}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone number
        <input
          type="text"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <Button type={`submit`} buttonStyle={`primary`} buttonSize={`small`}>
        Send Message
      </Button>
    </form>
  );
};
