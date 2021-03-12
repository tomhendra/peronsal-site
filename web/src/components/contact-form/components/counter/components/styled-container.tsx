import { Children } from '../../../../../types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={theme => ({
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      height: theme.spacings.golf,
    })}
  >
    {children}
  </div>
);
