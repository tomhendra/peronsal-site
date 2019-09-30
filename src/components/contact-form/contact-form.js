import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import { contactFormStyles } from './contact-form-styles';
import { Button } from '../button';
import { Tooltip } from '../tooltip';

const ContactForm = ({ errors, touched, isSubmitting }) => (
  <Form method="post" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" />
    <div css={contactFormStyles}>
      {/************* name *************/}
      <div
        css={{
          gridColumn: '1 / 2',
          gridRow: '1 / 2',
        }}
      >
        {touched.name && errors.name && (
          <Tooltip type={'alert'}>{errors.name}</Tooltip>
        )}
        <label>
          Full name
          <Field type="text" name="name" placeholder="Full name" />
        </label>
      </div>
      {/************* email *************/}
      <div
        css={{
          gridColumn: '1 / 2',
          gridRow: '2 / 3',
        }}
      >
        {touched.email && errors.email && (
          <Tooltip type={'alert'}>{errors.email}</Tooltip>
        )}
        <label>
          Email address
          <Field type="email" name="email" placeholder="Email" />
        </label>
      </div>
      {/************* phone number *************/}
      <div
        css={{
          gridColumn: '1 / 2',
          gridRow: '3 / 4',
        }}
      >
        {touched.phone && errors.phone && (
          <Tooltip type={'alert'}>{errors.phone}</Tooltip>
        )}
        <label>
          Phone number
          <Field type="tel" name="phone" placeholder="Phone number" />
        </label>
      </div>
      {/************* message *************/}
      <div
        css={{
          gridColumn: '2 / 3',
          gridRow: '1 / 4',
        }}
      >
        {touched.message && errors.message && (
          <Tooltip type={'alert'}>{errors.message}</Tooltip>
        )}
        <label>
          Message
          <Field
            component="textarea"
            rows="13"
            name="message"
            placeholder="Your message"
          />
        </label>
      </div>
      {/************* submit button *************/}
      <div
        css={{
          alignItems: 'flex-start',
          display: 'flex',
          gridColumn: '2 / 3',
          gridRow: '4 / 5',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          buttonStyle={'primary'}
          buttonSize={'small'}
        >
          Send Message
        </Button>
      </div>
    </div>
  </Form>
);

// TO TEST MORE !!!!!! RegEx needs tweaking, Perhaps country code selection? ................
const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const FormikContactForm = withFormik({
  mapPropsToValues({ name, email, phone, message }) {
    return {
      name: name || '',
      email: email || '',
      phone: phone || '',
      message: message || '',
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required('Please provide your name'),
    email: yup
      .string()
      .email('Email address is not valid')
      .required('Please provide your email address'),
    phone: yup
      .string()
      .matches(phoneRegEx, 'Phone number is not valid')
      .required('Please provide a contact number'),
    message: yup
      .string()
      .max(1000, 'The maximum message length is 1000 characters long')
      .required('Please provide a message'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // Placeholder for logic required by Netlify. Look into this later.................
    setTimeout(() => {
      if (values.email === 'tester@test.com') {
        setErrors({ email: 'Email already exists' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  },
})(ContactForm);
