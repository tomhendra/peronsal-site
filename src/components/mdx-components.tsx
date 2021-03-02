/* eslint-disable react/display-name */
import Image from 'next/image';
import { Text, Link } from 'theme-ui';
import { Table } from '@components';

export const MdxComponents = {
  img: Image,
  a: (props: any) => <Link {...props}>{props.children}</Link>,
  h1: (props: any) => <Text as="h1" {...props} />,
  h2: (props: any) => <Text as="h2" {...props} />,
  h3: (props: any) => <Text as="h3" {...props} />,
  h4: (props: any) => <Text as="h4" {...props} />,
  h5: (props: any) => <Text as="h5" {...props} />,
  h6: (props: any) => <Text as="h6" {...props} />,
  hr: (props: any) => <hr {...props} />,
  p: (props: any) => <Text {...props} />,
  ul: (props: any) => <ul {...props} />,
  ol: (props: any) => <ol variant="list.ordered" {...props} />,
  strong: (props: any) => <strong {...props} />,
  table: (props: any) => <Table {...props} />,
  // code: (props: any) => <CodeBlock {...props} />,
  // inlineCode: function InlineCode(props: any) => <code color="primary" fontSize="xl" {...props} />,
};
