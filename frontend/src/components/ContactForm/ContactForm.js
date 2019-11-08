import React from 'react';
import { Formik, Form } from 'formik';
// import styled from '@emotion/styled';
import * as Yup from 'yup';

import Card from '../Card';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import Checkbox from './components/Checkbox';
import Button from '../Button';

import { buttons } from '../../assets/styles/constants';

const { PRIMARY } = buttons;

/**
 * `....................styles....................`
 */

/**
 * `....................component....................`
 */

const ContactForm = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      acceptedTerms: false, // added for our checkbox
    }}
    validationSchema={Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address`')
        .required('Required'),
      message: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
      acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    <Card>
      <Form method="post" netlify-honeypot="bot-field" data-netlify="true">
        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Maggie"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Simpson"
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="maggie@fox.com"
        />
        <Textarea
          label="Message"
          name="message"
          placeholder="Your message..."
        />
        <Checkbox name="acceptedTerms">
          I accept the terms and conditions
        </Checkbox>
        <Button buttonStyle={PRIMARY} type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  </Formik>
);

export default ContactForm;
