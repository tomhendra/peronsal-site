import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';

import sanityConfig from '../../../sanity-config';

import Heading from '../Heading';
import Text from '../Text';
import Figure from '../Figure';
import CodeBlock from '../CodeBlock';
import InlineLink from '../InlineLink';

import { sizes, variants } from '../../assets/styles/style-enums';

const { CHARLIE, DELTA, ECHO } = sizes;
const { PRIMARY } = variants;

// ....................serializers....................

const serializers = {
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h2':
          return (
            <Heading as="h2" size={ECHO} variant={PRIMARY}>
              {children}
            </Heading>
          );

        case 'h3':
          return (
            <Heading as="h3" size={DELTA} variant={PRIMARY}>
              {children}
            </Heading>
          );

        case 'h4':
          return (
            <Heading as="h4" size={CHARLIE} variant={PRIMARY}>
              {children}
            </Heading>
          );

        case 'blockquote':
          return (
            <Text italic as="blockquote" size={DELTA} variant={PRIMARY}>
              {children}
            </Text>
          );

        default:
          return (
            <Text size={DELTA} variant={PRIMARY}>
              {children}
            </Text>
          );
      }
    },
    figure: ({ node }) => <Figure node={node} />,
    codeBlock: ({ node }) => (
      <CodeBlock code={node.code} language={node.language} />
    ),
  },
  listItem: ({ children }) => (
    <Text noMargin as="li" size={DELTA} variant={PRIMARY}>
      {children}
    </Text>
  ),
  marks: {
    link: ({ mark, children }) => {
      const { href } = mark;
      return <InlineLink externalLink={href}>{children}</InlineLink>;
    },
  },
};

// ....................component....................

function PortableText({ blocks }) {
  return (
    <BasePortableText
      blocks={blocks}
      serializers={serializers}
      {...sanityConfig}
    />
  );
}

// ....................propTypes....................

PortableText.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
};

PortableText.defaultProps = {
  blocks: [{}],
};

export default PortableText;
