/// <reference types="astro/client" />
declare global {
  // eslint-disable-next-line no-var
  var ThemeProvider: {
    updatePickers(theme?: string): void
  }
}

export {}
