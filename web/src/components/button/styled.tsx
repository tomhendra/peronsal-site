import { Children } from 'types';

type Props = {
  externalLink: string;
  children: Children;
};

export const StyledAnchor = (props: Props) => {
  const { externalLink, children } = props;
  return (
    <a
      href={externalLink}
      target="blank"
      rel="noopener"
      css={{ textDecoration: 'none' }}
    >
      {children}
    </a>
  );
};
