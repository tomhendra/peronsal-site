/// <reference types="astro/client" />
declare global {
  var ThemeProvider: {
    updatePickers(theme?: string): void
  }
}

export {}
