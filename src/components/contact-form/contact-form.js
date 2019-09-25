import React from 'react';
import { contactFormStyles } from './contact-form-styles';
import { Button } from '../button';

export const ContactForm = () => (
  <form css={contactFormStyles}>
    <input></input>
    <input></input>
    <input></input>
    <Button type={`submit`} buttonStyle={`primary`} buttonSize={`small`}>
      Send Message
    </Button>
  </form>
);
