import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/github';

/**
 * `....................styles....................`
 */

const PreStyles = ({ theme }) => ({
  borderRadius: theme.borderRadius.charlie,
  margin: `${theme.spacings.foxtrot} 0`,
  padding: theme.spacings.echo,
  paddingBottom: theme.spacings.delta,
  textAlign: 'left',
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
 * `....................styles....................`
 */

const Pre = styled.pre(PreStyles);
const LineNo = styled.span(LineNoStyles);

const CodeBlock = ({ code, language }) => (
  <Highlight
    {...defaultProps}
    theme={prismTheme}
    code={code}
    language={language}
  >
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

export default withTheme(CodeBlock);
