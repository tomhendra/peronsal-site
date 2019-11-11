import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Card from '../Card';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import Checkbox from './components/Checkbox';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

import { buttons, sizes } from '../../assets/styles/constants';

const { PRIMARY, TERTIARY } = buttons;
const { BRAVO, GOLF } = sizes;

/**
 * `....................styles....................`
 */

const formStyles = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',

  '& > *:not(:last-child)': {
    marginBottom: theme.spacings.delta,
  },
});

/**
 * `....................component....................`
 */

const StyledForm = styled(Form)(formStyles);

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactForm = () => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      acceptedTerms: false, // for the checkbox
    }}
    validationSchema={Yup.object({
      firstName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 30 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address`')
        .required('Required'),
      message: Yup.string()
        .max(500, 'Must be 500 characters or less')
        .required('Required'),
      acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'Please accept the terms and conditions.'),
    })}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...values,
        }),
      })
        .then(() => {
          alert('Success!');
          setSubmitting(false);
          resetForm();
        })
        .catch(error => {
          alert('Error: Please Try Again!');
          console.error(error);
          setSubmitting(false);
        });
    }}
  >
    {/* destructure helper methods from props */}
    {({ handleSubmit, isSubmitting, handleReset, dirty }) => (
      <Card spacing={GOLF}>
        <StyledForm
          onSubmit={handleSubmit}
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
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
            rows="8"
            placeholder="Your message (maximum 500 characters)"
          />
          <Checkbox name="acceptedTerms">I accept the privacy policy</Checkbox>
          <ButtonGroup>
            <Button
              buttonStyle={TERTIARY}
              buttonSize={BRAVO}
              disabled={isSubmitting || !dirty}
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              buttonStyle={PRIMARY}
              buttonSize={BRAVO}
              type="submit"
              disabled={isSubmitting || !dirty}
            >
              Send
            </Button>
          </ButtonGroup>
        </StyledForm>
      </Card>
    )}
  </Formik>
);

export default withTheme(ContactForm);
