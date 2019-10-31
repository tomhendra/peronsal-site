import React from 'react';

import Container from '../Container';
import Heading from '../Heading';

const GraphQLErrors = ({ errors }) => (
  <Container>
    <Heading>GraphQL Error</Heading>
    {errors.map(error => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </Container>
);

export default GraphQLErrors;
