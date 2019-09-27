import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import { contactFormStyles } from './contact-form-styles';
import { Button } from '../button';

const ContactForm = () => (
  <form
    css={contactFormStyles}
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    onSubmit={''}
  >
    <input type="hidden" name="bot-field" />
    <label
      css={{
        gridColumn: `1 / 2`,
        gridRow: `1 / 2`,
      }}
    >
      Full name
      <input type="text" name="name" placeholder="Full name" />
    </label>
    <label
      css={{
        gridColumn: `1 / 2`,
        gridRow: `2 / 3`,
      }}
    >
      Email address
      <input type="email" name="email" placeholder="Email" />
    </label>
    <label
      css={{
        gridColumn: `1 / 2`,
        gridRow: `3 / 4`,
      }}
    >
      Phone number
      <input type="text" name="phone" placeholder="Phone number" />
    </label>
    <label
      css={{
        display: `flex`,
        flexDirection: `column`,
        gridColumn: `2 / 3`,
        gridRow: `1 / 4`,
      }}
    >
      Message
      <textarea
        type="text"
        name="message"
        placeholder="Your message"
        css={{
          flexGrow: 1,
        }}
      />
    </label>
    <div
      css={{
        gridColumn: `2 / 3`,
        gridRow: `4 / 5`,
      }}
    >
      <Button type={`submit`} buttonStyle={`primary`} buttonSize={`small`}>
        Send Message
      </Button>
    </div>
  </form>
);

export const FormikContactForm = withFormik({
  mapPropsToValues() {
    return {
      email: 'test text',
    };
  },
})(ContactForm);
