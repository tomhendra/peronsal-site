import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import theme from '../src/core/theme';

// TODO --> Work out Theme UI's useColorMode hook in test env.

function customRender(ui, { testTheme = theme, ...options } = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider theme={testTheme}>{children}</ThemeProvider>;
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

export { customRender as render };
export * from '@testing-library/react';
