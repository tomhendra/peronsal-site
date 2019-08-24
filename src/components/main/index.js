import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Main = ({ mainContent }) => {
  return (
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 550px;
      `}
    >
      {mainContent}
    </main>
  );
};

Main.propTypes = {
  content: PropTypes.node.isRequired,
};

export default Main;
