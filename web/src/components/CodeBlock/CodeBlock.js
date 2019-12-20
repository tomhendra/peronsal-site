import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import Highlight, { defaultProps } from 'prism-react-renderer';
// import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import PropTypes from 'prop-types';
import nord from './themes/nord';

/**
 * `....................styles....................`
 */

const PreStyles = ({ theme }) => ({
  borderRadius: theme.borderRadius.delta,
  margin: `${theme.spacings.foxtrot} 0`,
  padding: theme.spacings.echo,
  paddingBottom: theme.spacings.delta,
  textAlign: 'left',
  fontFamily: theme.fontStack.mono,
  fontSize: theme.typography.text.charlie.fontSize,

  '& .token-line': {
    lineHeight: '1.3rem',
    height: '2.3rem',
  },
});

const LineNoStyles = ({ theme }) => ({
  display: 'inline-block',
  width: theme.spacings.echo,
  userSelect: 'none',
  opacity: '0.3',
});

/**
 * `....................component....................`
 */

const Pre = styled.pre(PreStyles);
const LineNo = styled.span(LineNoStyles);

const CodeBlock = ({ code, language }) => (
  <Highlight {...defaultProps} theme={nord} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
);

/**
 * `....................propTypes....................`
 */

CodeBlock.propTypes = {
  code: PropTypes.string,
  // PopTypes for language defined as what @sanity/code-input supports.
  // If unsupported by prism-react-renderer, no syntax highlighting will be applied.
  // eslint-disable-next-line max-len
  // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
  language: PropTypes.oneOf([
    'batchfile', // not supported by prism-react-renderer
    'css',
    'groq', // not supported by prism-react-renderer
    'html', // not supported by prism-react-renderer - ??? - assume renders OK as markup,
    'javascript',
    'json',
    'jsx',
    'markdown',
    'php', // not supported by prism-react-renderer
    'python',
    'sass',
    'scss',
    'sh', // defined as 'bash' by prism-react-renderer
    'text', // not supported by prism-react-renderer (plaintext)
  ]),
};

CodeBlock.defaultProps = {
  code: '<DefaultProp />',
  language: 'jsx',
};

export default withTheme(CodeBlock);
