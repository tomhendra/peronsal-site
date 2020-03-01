import React from 'react';

import Section from '../Section';
import Heading from '../Heading';

// ....................component....................

function GraphQLErrors({ errors }) {
  return (
    <Section>
      <Heading>GraphQL Error</Heading>
      {errors.map(error => (
        <pre key={error.message}>{error.message}</pre>
      ))}
    </Section>
  );
}

export default GraphQLErrors;
