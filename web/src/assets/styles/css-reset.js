export const cssReset = {
  '*,::before,&::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'inherit',
  },

  html: {
    boxSizing: 'border-box',
    fontSize: '62.5%',
  },

  body: {
    height: '100%',
    width: '100%',
    /* remove margin for main div that that Gatsby mounts into */
    '> div': {
      marginTop: 0,
    },
  },
  button: {
    cursor: 'pointer',
  },

  'button:disabled': {
    cursor: 'default',
  },
};
