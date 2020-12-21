import { NavbarLink } from './';
import { render } from '@test/utils';

test('Renders the link', () => {
  const { container } = render(<NavbarLink href="a link">a link</NavbarLink>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      color: inherit;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
      display: inline-block;
    }

    .emotion-0:hover,
    .emotion-0:focus,
    .emotion-0.active {
      color: var(--theme-ui-colors-primary, #11e);
    }

    <a
      class="emotion-0"
      href="/a%20link"
    >
      a link
    </a>
  `);
});
