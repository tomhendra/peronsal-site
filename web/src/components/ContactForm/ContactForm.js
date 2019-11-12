import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Card from '../Card';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import Checkbox from './components/Checkbox';
import ErrorMessage from './components/ErrorMessage';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Text from '../Text';

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

const ContactForm = () => {
  // Server State Handling
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleOnSubmit = async (values, actions) => {
    await axios({
      method: 'POST',
      url: 'https://formspree.io/mayyjyqa',
      data: values,
    })
      .then(() => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          'Thank you, your message has been submitted!',
        );
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        acceptedTerms: false,
      }}
      // override onSubmit using custom function as advised by Formspree
      // https://formspree.io/blog/react-forms-3/
      onSubmit={handleOnSubmit}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 30 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        message: Yup.string()
          .max(500, 'Must be 500 characters or less')
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'Please accept the terms and conditions.'),
      })}
    >
      {/* destructure helper methods from props */}
      {({ isSubmitting, handleReset }) => (
        <Card spacing={GOLF}>
          <StyledForm id="fs-frm" noValidate>
            <input
              type="hidden"
              name="_subject"
              value="New enquiry from tomhendra.dev"
            />
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
            <Checkbox name="acceptedTerms">
              I accept the privacy policy
            </Checkbox>
            <ButtonGroup>
              <Button
                buttonStyle={TERTIARY}
                buttonSize={BRAVO}
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
            {serverState &&
              (!serverState.ok ? (
                <ErrorMessage>{serverState.msg}</ErrorMessage>
              ) : (
                <Text>{serverState.msg}</Text>
              ))}
          </StyledForm>
        </Card>
      )}
    </Formik>
  );
};

export default withTheme(ContactForm);
