import { ReactElement, useEffect } from 'react';
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ThemeProvider, useColorMode } from 'theme-ui';
import theme from '../src/shared/theme';
import { WithChildren } from 'src/shared/types/type-utils';

// https://testing-library.com/docs/react-testing-library/setup/#custom-render
// https://epicreact.dev/modules/testing-react-apps/context-and-custom-render-method-extra-credit-solution-2

type renderOptions = {
  testColorMode?: 'default' | 'dark';
  options?: Omit<RenderOptions, 'queries'>;
};

function render(ui: ReactElement, options: renderOptions = {}): RenderResult {
  const { testColorMode = 'default', ...otherOptions } = options;

  function Mode(): ReactElement {
    const [, setColorMode] = useColorMode();
    useEffect(() => setColorMode(testColorMode), [setColorMode]);
    return <div />;
  }

  function AllTheProviders({ children }: WithChildren): ReactElement {
    return (
      <ThemeProvider theme={theme}>
        <Mode />
        {children}
      </ThemeProvider>
    );
  }

  return rtlRender(ui, { wrapper: AllTheProviders, ...otherOptions });
}

export * from '@testing-library/react';
// override React Testing Library's render with our own
export { render };
