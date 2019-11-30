import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Card from '../Card';
import Tooltip from '../Tooltip';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import Checkbox from './components/Checkbox';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

import { buttons, colors, sizes } from '../../assets/styles/constants';

const { PRIMARY, TERTIARY } = buttons;
const { DANGER, SUCCESS } = colors;
const { BRAVO, ECHO, GOLF } = sizes;

/**
 * `....................styles....................`
 */

const formStyles = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
  zIndex: theme.zIndex.form,

  '& > *:not(:last-child)': {
    marginBottom: theme.spacings.foxtrot,
  },
});

const linkStyles = ({ theme }) => ({
  color: theme.colors.n400,
  fontSize: theme.typography.text.bravo.fontSize,
  fontWeight: theme.fontWeight.bold,
  textDecoration: 'none',

  '&:visited': {
    color: theme.colors.n400,
  },

  '&:hover': {
    color: theme.colors.p400,
  },
});

/**
 * `....................component....................`
 */

const StyledForm = styled(Form)(formStyles);
const FormLink = styled(Link)(linkStyles);

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
          .oneOf([true], 'Please agree to the data privacy policy.'),
      })}
    >
      {/* destructure helper methods from props */}
      {({ isSubmitting, handleReset }) => (
        <Card padding={[ECHO, GOLF]}>
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
              I agree to the&nbsp;
              <FormLink to="/">privacy policy</FormLink>
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
              {serverState &&
                (!serverState.ok ? (
                  <Tooltip variant={DANGER}>{serverState.msg}</Tooltip>
                ) : (
                  <Tooltip variant={SUCCESS}>{serverState.msg}</Tooltip>
                ))}
            </ButtonGroup>
          </StyledForm>
        </Card>
      )}
    </Formik>
  );
};

export default withTheme(ContactForm);
