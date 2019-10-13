import React from 'react';
import { withTheme } from 'emotion-theming';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

<<<<<<< HEAD:frontend/src/components/ContactForm/ContactForm.js
=======
import { colors, fontsizes, sizes } from '../../assets/styles';
>>>>>>> 46f85bc230a9102059d37b3e6963ca895cd6a9b6:src/components/ContactForm/ContactForm.js
import Button from '../Button';
import Tooltip from '../Tooltip';

/**
 * `....................constants....................`
 */

// TO TEST MORE !!!!!! RegEx needs tweaking, Perhaps country code selection?
// eslint-disable-next-line max-len
const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

/**
 * `....................styles....................`
 */

const styles = theme => ({
  background: theme.colors.n100,
  border: `1px solid ${theme.colors.n300}`,
  borderRadius: theme.borderRadius.charlie,
  display: 'grid',
  gap: `${theme.spacings.echo} ${theme.spacings.foxtrot}`,
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  margin: '0 auto',
  // eslint-disable-next-line max-len
  padding: `${theme.spacings.hotel} ${theme.spacings.golf} ${theme.spacings.echo} ${theme.spacings.golf}`,
  width: theme.spacings.quebec,

  // all immediate children selector for child div elements
  '> *': {
    // allows for absolutely positioned Tooltips
    position: 'relative',

    'input, textarea': {
      backgroundColor: theme.colors.n900,
      borderRadius: theme.borderRadius.charlie,
      border: `${theme.borderWidth.alpha} solid ${theme.colors.n600}`,
      // Firefox displays font as courier for textarea!
      fontFamily: theme.fontStack.default,
      fontSize: theme.typography.text.bravo.fontSize,
      padding: theme.spacings.bravo,
      width: '100%',
    },

    input: {
      height: theme.spacings.golf,
    },

    textarea: {
      resize: 'none',
    },
  },
});

/**
 * `....................component....................`
 */

const ContactForm = ({ errors, touched, isSubmitting, theme, ...props }) => (
  <Form method="post" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" />
    <div css={styles(theme)} {...props}>
      <div
        css={{
          gridColumn: '1 / 2',
          gridRow: '1 / 2',
        }}
      >
        {touched.name && errors.name && (
          <Tooltip type="alert">{errors.name}</Tooltip>
        )}
        <label>
          <Field type="text" name="name" placeholder="Full name" />
          Full name
        </label>
      </div>
      <div
        css={{
          gridColumn: '1 / 2',
          gridRow: '2 / 3',
        }}
      >
        {touched.email && errors.email && (
          <Tooltip type="alert">{errors.email}</Tooltip>
        )}
        <label>
          Email address
          <Field type="email" name="email" placeholder="Email" />
        </label>
      </div>
      <div
        css={{
          gridColumn: '1 / 2',
          gridRow: '3 / 4',
        }}
      >
        {touched.phone && errors.phone && (
          <Tooltip type="alert">{errors.phone}</Tooltip>
        )}
        <label>
          Phone number
          <Field type="tel" name="phone" placeholder="Phone number" />
        </label>
      </div>
      <div
        css={{
          gridColumn: '2 / 3',
          gridRow: '1 / 4',
        }}
      >
        {touched.message && errors.message && (
          <Tooltip type="alert">{errors.message}</Tooltip>
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
          buttonStyle="primary"
          buttonSize="alpha"
        >
          Send Message
        </Button>
      </div>
    </div>
  </Form>
);

/**
 * `....................Formik....................`
 */

const FormikContactForm = withFormik({
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
  },
})(ContactForm);

export default withTheme(FormikContactForm);
