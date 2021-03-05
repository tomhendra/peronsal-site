/** @jsxImportSource theme-ui */
import { IconButton, useColorMode } from 'theme-ui';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ModeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <IconButton
      sx={{ width: 10, height: 10 }}
      aria-label="Toggle dark mode"
      onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
    >
      {colorMode === 'default' ? <FiMoon /> : <FiSun />}
    </IconButton>
  );
}
