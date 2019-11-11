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
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }, 1000);
    }}
  >
    {/* destructure helper methods from props */}
    {({ handleSubmit, isSubmitting, handleReset }) => (
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
            placeholder="Your message..."
          />
          <Checkbox name="acceptedTerms">I accept the privacy policy</Checkbox>
          <ButtonGroup>
            <Button
              buttonStyle={TERTIARY}
              buttonSize={BRAVO}
              type="reset"
              disabled={isSubmitting}
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              buttonStyle={PRIMARY}
              buttonSize={BRAVO}
              type="submit"
              disabled={isSubmitting}
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
