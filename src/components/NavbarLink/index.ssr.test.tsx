import ReactDOMServer from 'react-dom/server';
import { NavbarLink } from './';

test('renders', () => {
  ReactDOMServer.renderToString(
    <NavbarLink href="another link">Another link</NavbarLink>,
  );
});
