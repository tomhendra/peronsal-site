/**
 * `....................colours....................`
 */

const white = '#FFFFFF';
const black = '#0F131A';

const neutral = {
  n000: 'hsl(220, 16%, 22%)', // Nord Polar Night
  n100: 'hsl(222, 16%, 28%)', // Nord Polar Night
  n200: 'hsl(220, 17%, 32%)', // Nord Polar Night
  n300: 'hsl(220, 16%, 36%)', // Nord Polar Night
  n400: 'hsl(220, 17%, 40%)',
  n500: 'hsl(219, 28%, 88%)', // Nord Snow Storm
  n600: 'hsl(218, 27%, 92%)', // Nord Snow Storm
  n700: 'hsl(218, 27%, 94%)', // Nord Snow Storm
  n800: 'hsl(220, 27%, 96%)',
  n900: 'hsl(220, 27%, 98%)',
};

const blue = {
  b000: 'hsl(213, 30%, 19%)',
  b100: 'hsl(213, 30%, 24%)',
  b200: 'hsl(212, 29%, 33%)',
  b300: 'hsl(213, 29%, 43%)',
  b400: 'hsl(213, 32%, 52%)', // Nord Frost
  b500: 'hsl(210, 34%, 63%)', // Nord Frost
  b600: 'hsl(209, 34%, 70%)',
  b700: 'hsl(209, 34%, 76%)',
  b800: 'hsl(209, 33%, 83%)',
  b900: 'hsl(210, 35%, 90%)',
};

const aqua = {
  a000: 'hsl(193, 21%, 43%)',
  a100: 'hsl(194, 21%, 49%)',
  a200: 'hsl(193, 26%, 55%)',
  a300: 'hsl(193, 32%, 60%)',
  a400: 'hsl(193, 43%, 67%)', // Nord Frost
  a500: 'hsl(179, 25%, 65%)', // Nord Frost
  a600: 'hsl(179, 25%, 68%)',
  a700: 'hsl(178, 25%, 71%)',
  a800: 'hsl(178, 25%, 74%)',
  a900: 'hsl(178, 25%, 77%)',
};

const lavender = {
  l000: 'hsl(311, 12%, 17%)',
  l100: 'hsl(313, 12%, 23%)',
  l200: 'hsl(311, 12%, 29%)',
  l300: 'hsl(310, 12%, 40%)',
  l400: 'hsl(312, 13%, 52%)',
  l500: 'hsl(311, 20%, 63%)', // Nord Aurora
  l600: 'hsl(312, 20%, 70%)',
  l700: 'hsl(313, 20%, 76%)',
  l800: 'hsl(311, 20%, 83%)',
  l900: 'hsl(312, 19%, 90%)',
};

const red = {
  r000: 'hsl(355, 33%, 16%)',
  r100: 'hsl(355, 32%, 21%)',
  r200: 'hsl(354, 32%, 26%)',
  r300: 'hsl(354, 33%, 36%)',
  r400: 'hsl(355, 32%, 46%)',
  r500: 'hsl(354, 42%, 56%)', // Nord Aurora
  r600: 'hsl(354, 42%, 64%)',
  r700: 'hsl(354, 42%, 72%)',
  r800: 'hsl(354, 41%, 80%)',
  r900: 'hsl(353, 42%, 88%)',
};

const orange = {
  o000: 'hsl(14, 30%, 17%)',
  o100: 'hsl(15, 30%, 23%)',
  o200: 'hsl(15, 30%, 29%)',
  o300: 'hsl(14, 30%, 40%)',
  o400: 'hsl(14, 32%, 52%)',
  o500: 'hsl(14, 51%, 63%)', // Nord Aurora
  o600: 'hsl(14, 50%, 69%)',
  o700: 'hsl(14, 50%, 76%)',
  o800: 'hsl(14, 49%, 83%)',
  o900: 'hsl(14, 50%, 90%)',
};

const yellow = {
  y000: 'hsl(40, 26%, 20%)',
  y100: 'hsl(39, 26%, 27%)',
  y200: 'hsl(40, 25%, 34%)',
  y300: 'hsl(40, 26%, 47%)',
  y400: 'hsl(40, 39%, 60%)',
  y500: 'hsl(40, 71%, 73%)', // Nord Aurora
  y600: 'hsl(40, 70%, 78%)',
  y700: 'hsl(39, 70%, 83%)',
  y800: 'hsl(40, 68%, 88%)',
  y900: 'hsl(39, 68%, 93%)',
};

const green = {
  g000: 'hsl(92, 14%, 18%)',
  g100: 'hsl(92, 16%, 24%)',
  g200: 'hsl(91, 15%, 30%)',
  g300: 'hsl(93, 15%, 41%)',
  g400: 'hsl(92, 17%, 53%)',
  g500: 'hsl(92, 28%, 65%)', // Nord Aurora
  g600: 'hsl(92, 28%, 71%)',
  g700: 'hsl(92, 28%, 77%)',
  g800: 'hsl(91, 28%, 84%)',
  g900: 'hsl(94, 28%, 90%)',
};

const primary = {
  p000: aqua.a000,
  p100: aqua.a100,
  p200: aqua.a200,
  p300: aqua.a300,
  p400: aqua.a400,
  p500: aqua.a500,
  p600: aqua.a600,
  p700: aqua.a700,
  p800: aqua.a800,
  p900: aqua.a900,
};

const misc = {
  shadowNeutral: neutral.n000,
  shadowPrimary: primary.p400,
  bodyBg: neutral.n900,
  bodyColor: neutral.n100,
  subheadingColor: neutral.n200,
  headingColor: neutral.n300,
  brandColor: primary.p400,
  danger: red.r500,
  warning: yellow.y500,
  success: green.g500,
};

export const colors = {
  white,
  black,
  ...neutral,
  ...blue,
  ...aqua,
  ...primary,
  ...lavender,
  ...red,
  ...orange,
  ...yellow,
  ...green,
  ...misc,
};

/**
 * `....................typography....................`
 */

export const typography = {
  headings: {
    alpha: {
      fontSize: '2rem', // 20px
      lineHeight: 1.2,
    },
    bravo: {
      fontSize: '2.4rem', // 24px
      lineHeight: 1.2,
    },
    charlie: {
      fontSize: '3rem', // 30px
      lineHeight: 1.2,
    },
    delta: {
      fontSize: '3.6rem', // 36px
      lineHeight: 1.1,
    },
    echo: {
      fontSize: '4.8rem', // 48px
      lineHeight: 1,
    },
    foxtrot: {
      fontSize: '6rem', // 60px
      lineHeight: 1,
    },
    golf: {
      fontSize: '7.2rem', // 72px
      lineHeight: 1,
    },
    hotel: {
      fontSize: '8.4rem', // 84px
      lineHeight: 1,
    },
    india: {
      fontSize: '9.6rem', // 96px
      lineHeight: 1,
    },
  },
  subHeadings: {
    alpha: {
      fontSize: '1.7rem', // 17px
      lineHeight: 1.5,
    },
    bravo: {
      fontSize: '2rem', // 20px
      lineHeight: 1.5,
    },
    charlie: {
      fontSize: '2.3rem', // 23px
      lineHeight: 1.4,
    },
    delta: {
      fontSize: '3.4rem', // 34px
      lineHeight: 1.3,
    },
  },
  text: {
    alpha: {
      fontSize: '1rem', // 10px
      lineHeight: 1.5,
    },
    bravo: {
      fontSize: '1.3rem', // 13px
      lineHeight: 1.5,
    },
    charlie: {
      fontSize: '1.6rem', // 16px
      lineHeight: 1.5,
    },
    delta: {
      fontSize: '1.8rem', // 18px
      lineHeight: 1.5,
    },
    echo: {
      fontSize: '2.4rem', // 25px
      lineHeight: 1.5,
    },
  },
};

export const fontStack = {
  default:
    // eslint-disable-next-line max-len
    'Noto Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading: 'Lato, sans-serif',
  mono: 'Fira Code, Consolas, monaco, monospace',
};

export const fontWeight = {
  regular: '400',
  bold: '700',
};

/**
 * `....................sizes....................`
 */

export const spacings = {
  alpha: '0.4rem', // 4px
  bravo: '0.8rem', // 8px
  charlie: '1.2rem', // 12px
  delta: '1.6rem', // 16px
  echo: '2.4rem', // 24px
  foxtrot: '3.2rem', // 32px
  golf: '4.8rem', // 48px
  hotel: '6.4rem', // 64px
  india: '9.6rem', // 96px
  juliett: '12.8rem', // 128px
  kilo: '19.2rem', // 192px
  lima: '25.6rem', // 256px
  mike: '32rem', // 320px
  november: '38.4rem', // 384px
  oscar: '51.2rem', // 512px
  papa: '64rem', // 640px
  quebec: '76.8rem', // 768px
  romeo: '96rem', // 960px
};

export const iconSizes = {
  alpha: '1.2rem', // 12px
  bravo: '1.4rem', // 14px
  charlie: '1.6rem', // 16px
  delta: '1.8rem', // 18px
  echo: '2rem', // 20px
  foxtrot: '2.4rem', // 24px
  golf: '2.8rem', // 28px
  hotel: '3.2rem', // 32px
  india: '4.8rem', // 48px
  juliett: '6.4rem', // 64px
  kilo: '8.4rem', // 84px
};

export const borderRadius = {
  alpha: '1px',
  bravo: '4px',
  charlie: '6px',
  delta: '12px',
};

export const borderWidth = {
  alpha: '1px',
  bravo: '2px',
  charlie: '5px',
  delta: '10px',
};

/**
 * `....................layout....................`
 */

export const grid = {
  alpha: {
    cols: 8,
    maxWidth: '35.1rem', // 351px
    gutter: spacings.charlie,
  },
  bravo: {
    cols: 8,
    maxWidth: '67.2rem', // 672px
    gutter: spacings.delta,
  },
  charlie: {
    cols: 12,
    maxWidth: '88rem', // 880px
    gutter: spacings.echo,
  },
  delta: {
    cols: 12,
    maxWidth: '88rem', // 880px
    gutter: spacings.echo,
  },
};

export const breakpoints = [
  '37.5rem', // 375px
  '76.8rem', // 768px
  '96rem', // 960px
  '128rem', // 1280px
];

/**
 * `....................misc....................`
 */

export const transitions = {
  fast: '100ms ease-in-out',
  default: '200ms ease-in-out',
  slow: '300ms ease-in-out',
};

export const zIndex = {
  background: -1,
  default: 0,
  absolute: 1,
  card: 10,
  form: 15,
  input: 20,
  popover: 30,
  tooltip: 31,
  footer: 500,
  header: 600,
  backdrop: 700,
  drawer: 800,
  burger: 900,
  modal: 1000,
};
