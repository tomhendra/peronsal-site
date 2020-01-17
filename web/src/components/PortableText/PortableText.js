import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';

import sanityConfig from '../../../sanity-config';

import Heading from '../Heading';
import Text from '../Text';
import Figure from '../Figure';
import CodeBlock from '../CodeBlock';

import { sizes } from '../../assets/styles/constants';

const { CHARLIE, DELTA, ECHO } = sizes;

// ....................serializers....................

const serializers = {
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h2':
          return (
            <Heading as="h2" size={ECHO}>
              {children}
            </Heading>
          );

        case 'h3':
          return (
            <Heading as="h3" size={DELTA}>
              {children}
            </Heading>
          );

        case 'h4':
          return (
            <Heading as="h4" size={CHARLIE}>
              {children}
            </Heading>
          );

        case 'blockquote':
          return (
            <Text italic as="blockquote" size={DELTA}>
              {children}
            </Text>
          );

        default:
          return <Text size={DELTA}>{children}</Text>;
      }
    },
    figure: ({ node }) => <Figure node={node} />,
    codeBlock: ({ node }) => (
      <CodeBlock code={node.code} language={node.language} />
    ),
  },
  listItem: ({ children }) => (
    <Text as="li" size={DELTA}>
      {children}
    </Text>
  ),
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
