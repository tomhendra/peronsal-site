import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';

import sanityConfig from '../../../sanity-config';

import Heading from '../Heading';
import Text from '../Text';
// import Figure from '../Figure';

import { sizes } from '../../assets/styles/constants';

const { CHARLIE, DELTA, ECHO } = sizes;

const serializers = {
  types: {
    block({ node, children }) {
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
          return <blockquote>{children}</blockquote>;

        case 'code':
          return <code>{children}</code>;

        default:
          return <Text>{children}</Text>;
      }
    },
    // read MUCH more into the best way to handle images with Sanity
    // image({ node }) {
    //   return <Figure {...node} />;
    // },
  },
};

const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    serializers={serializers}
    {...sanityConfig}
  />
);

export default BlockContent;
