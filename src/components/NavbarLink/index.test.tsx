import { NavbarLink } from '@components/NavbarLink';
import { render, screen } from '../../test/test-utils';

test('renders with the default styles for the default colorMode', () => {
  render(<NavbarLink href="link">a link</NavbarLink>, {
    colorMode: 'default',
  });
  const link = screen.getByText(/a link/i);
  expect(link).toMatchInlineSnapshot(`
    .emotion-0 {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      color: inherit;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      display: inline-block;
    }

    .emotion-0:hover,
    .emotion-0:focus,
    .emotion-0.active {
      color: var(--theme-ui-colors-primary, #2b6cb0);
    }

    <a
      class="emotion-0"
      href="/link"
    >
      a link
    </a>
  `);
});

test('renders with the dark styles for the dark colorMode', () => {
  render(<NavbarLink href="link">a link</NavbarLink>, {
    colorMode: 'dark',
  });
  const link = screen.getByText(/a link/i);
  expect(link).toMatchInlineSnapshot(`
    .emotion-0 {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      color: inherit;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      display: inline-block;
    }

    .emotion-0:hover,
    .emotion-0:focus,
    .emotion-0.active {
      color: var(--theme-ui-colors-primary, #2b6cb0);
    }

    <a
      class="emotion-0"
      href="/link"
    >
      a link
    </a>
  `);
});
