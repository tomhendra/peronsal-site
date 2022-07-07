/* 
  Dark mode implementation as per example in Remix repo
  https://github.com/remix-run/remix/tree/main/examples/dark-mode

  Hopefully this ceremony will become a relic of the past in the future 
  https://tabatkins.github.io/css-toggle/
*/

import {Moon, Sun} from 'react-feather';
import {Theme, useTheme} from '~/helpers/theme-provider';
import VisuallyHidden from '../VisuallyHidden';
import Button from '~/components/Button';
import type {LinksFunction} from '@remix-run/cloudflare';

import {links as buttonLinks} from '~/components/Button';

const links: LinksFunction = () => [...buttonLinks()];

function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    );
  };

  return (
    <Button as="unstyled" onClick={toggleTheme} className="theme-toggle-button">
      <span>{theme === Theme.LIGHT ? <Sun /> : <Moon />}</span>
      <VisuallyHidden>Toggle light and dark mode</VisuallyHidden>
    </Button>
  );
}

export {links, ThemeToggle as default};
