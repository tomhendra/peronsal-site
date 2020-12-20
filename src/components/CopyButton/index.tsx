/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { Button } from 'theme-ui';

export function CopyButton({ value }) {
  const [hasCopied, setHasCopied] = useState(false);

  const handleClicked = () => {
    copy(value);
    setHasCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button aria-label="Copy text" role="button" onClick={handleClicked}>
      {hasCopied ? 'Copied' : 'Copy'}
    </Button>
  );
}
