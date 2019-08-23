import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Main = ({ content }) => {
  return (
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 550px;
      `}
    >
      {content}
    </main>
  );
};

Main.propTypes = {
  content: PropTypes.node.isRequired,
};

export default Main;
