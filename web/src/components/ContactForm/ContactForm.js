import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';

import { Button } from '../Button';
import Card from '../Card';
import InlineLink from '../InlineLink';
import Tooltip from '../Tooltip';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import Checkbox from './components/Checkbox';
import ButtonGroup from '../ButtonGroup';

import { variantPropType } from '../../utils/shared-prop-types';

import {
  variants,
  colors,
  positions,
  sizes,
} from '../../assets/styles/style-enums';

const { PRIMARY, SECONDARY, TERTIARY } = variants;
const { DANGER, ACCENT_BRAVO } = colors;
const { END } = positions;
const { ALPHA, ECHO, GOLF } = sizes;

// ....................styles....................

const formStyles = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
  zIndex: theme.zIndex.form,

  '& > *:not(:last-child)': {
    marginBottom: theme.spacings.echo,
  },
});

// ....................component....................

const StyledForm = styled(Form)(formStyles);

function ContactForm({ variant }) {
  // define character max lengths
  const firstNameMaxLength = 20;
  const lastNameMaxLength = 20;
  const messageMaxLength = 500;

  // Server State Handling
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  // submit handling
  const handleOnSubmit = async (values, actions) => {
    await axios({
      method: 'POST',
      url: 'https://formspree.io/mayyjyqa',
      data: values,
    })
      .then(() => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, 'Message submitted. Thank you!');
      })
      .catch((error) => {
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
          .max(
            firstNameMaxLength,
            `Must be ${firstNameMaxLength} characters or less`,
          )
          .required('Required'),
        lastName: Yup.string()
          .max(
            lastNameMaxLength,
            `Must be ${lastNameMaxLength} characters or less`,
          )
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string()
          .max(
            messageMaxLength,
            `Must be ${messageMaxLength} characters or less`,
          )
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'Please agree to the privacy policy.'),
      })}
    >
      {/* destructure helper methods from props */}
      {({ isSubmitting, handleReset }) => (
        <Card padding={[ECHO, GOLF]} accent={ACCENT_BRAVO} variant={variant}>
          <StyledForm id="fs-frm" noValidate>
            <input
              variant={variant}
              type="hidden"
              name="_subject"
              value="New enquiry from tomhendra.dev"
            />
            <TextInput
              variant={variant}
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Maggie"
            />
            <TextInput
              variant={variant}
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Simpson"
            />
            <TextInput
              variant={variant}
              label="Email Address"
              name="email"
              type="email"
              placeholder="maggie@fox.com"
            />
            <Textarea
              variant={variant}
              label="Message"
              name="message"
              rows="8"
              placeholder="Your message (maximum 500 characters)"
              messageMaxLength={messageMaxLength}
            />
            <Checkbox name="acceptedTerms" variant={variant}>
              I agree to the&nbsp;
              <InlineLink internalLink="/privacy-policy/">
                privacy policy
              </InlineLink>
            </Checkbox>
            <ButtonGroup>
              <Button variant={TERTIARY} size={ALPHA} onClick={handleReset}>
                Reset
              </Button>
              <Button
                variant={PRIMARY}
                size={ALPHA}
                type="submit"
                disabled={isSubmitting}
              >
                {!serverState && !isSubmitting
                  ? 'Send'
                  : !serverState && isSubmitting
                  ? 'Sending message...'
                  : serverState && serverState.ok && 'Message sent!'}
              </Button>
              {serverState && !serverState.ok && (
                <Tooltip variant={DANGER} align={END}>
                  {serverState.msg}
                </Tooltip>
              )}
            </ButtonGroup>
          </StyledForm>
        </Card>
      )}
    </Formik>
  );
}
// ....................propTypes....................

ContactForm.propTypes = {
  variant: variantPropType,
};

ContactForm.defaultProps = {
  variant: SECONDARY,
};

export default ContactForm;
