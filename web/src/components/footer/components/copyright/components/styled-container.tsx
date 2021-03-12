import { Children } from '../../../../../types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={{
      alignItems: 'center',
      display: 'flex',
    }}
  >
    {children}
  </div>
);
