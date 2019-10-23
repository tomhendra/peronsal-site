/**
 * `....................colours....................`
 */

const white = '#FFFFFF';
const black = '#0F131A';
const shadow = '#0C0F14';

const neutral = {
  n000: 'hsl(210, 24%, 16%)',
  n100: 'hsl(209, 20%, 25%)',
  n200: 'hsl(209, 18%, 30%)',
  n300: 'hsl(209, 14%, 37%)',
  n400: 'hsl(211, 12%, 43%)',
  n500: 'hsl(211, 10%, 53%)',
  n600: 'hsl(211, 13%, 65%)',
  n700: 'hsl(210, 16%, 82%)',
  n800: 'hsl(214, 15%, 91%)',
  n900: 'hsl(216, 33%, 97%)',
};

const blue = {
  b000: 'hsl(218, 100%, 17%)',
  b100: 'hsl(216, 98%, 25%)',
  b200: 'hsl(215, 96%, 32%)',
  b300: 'hsl(214, 95%, 36%)',
  b400: 'hsl(212, 92%, 43%)',
  b500: 'hsl(210, 83%, 53%)',
  b600: 'hsl(208, 88%, 62%)',
  b700: 'hsl(206, 93%, 73%)',
  b800: 'hsl(204, 100%, 86%)',
  b900: 'hsl(202, 100%, 95%)',
};

const turquoise = {
  t000: 'hsl(188, 91%, 23%)',
  t100: 'hsl(186, 91%, 29%)',
  t200: 'hsl(184, 90%, 34%)',
  t300: 'hsl(182, 85%, 39%)',
  t400: 'hsl(180, 77%, 47%)',
  t500: 'hsl(178, 78%, 57%)',
  t600: 'hsl(176, 87%, 67%)',
  t700: 'hsl(174, 96%, 78%)',
  t800: 'hsl(172, 97%, 88%)',
  t900: 'hsl(171, 82%, 94%)',
};

const red = {
  r000: 'hsl(348, 94%, 20%)',
  r100: 'hsl(350, 94%, 28%)',
  r200: 'hsl(352, 90%, 35%)',
  r300: 'hsl(354, 85%, 44%)',
  r400: 'hsl(356, 75%, 53%)',
  r500: 'hsl(360, 83%, 62%)',
  r600: 'hsl(360, 91%, 69%)',
  r700: 'hsl(360, 100%, 80%)',
  r800: 'hsl(360, 100%, 87%)',
  r900: 'hsl(360, 100%, 95%)',
};

const yellow = {
  y000: 'hsl(15, 86%, 30%)',
  y100: 'hsl(22, 82%, 39%)',
  y200: 'hsl(29, 80%, 44%)',
  y300: 'hsl(36, 77%, 49%)',
  y400: 'hsl(42, 87%, 55%)',
  y500: 'hsl(44, 92%, 63%)',
  y600: 'hsl(48, 94%, 68%)',
  y700: 'hsl(48, 95%, 76%)',
  y800: 'hsl(48, 100%, 88%)',
  y900: 'hsl(49, 100%, 96%)',
};

const green = {
  g000: 'hsl(170, 97%, 15%)',
  g100: 'hsl(168, 80%, 23%)',
  g200: 'hsl(166, 72%, 28%)',
  g300: 'hsl(164, 71%, 34%)',
  g400: 'hsl(162, 63%, 41%)',
  g500: 'hsl(160, 51%, 49%)',
  g600: 'hsl(158, 58%, 62%)',
  g700: 'hsl(156, 73%, 74%)',
  g800: 'hsl(154, 75%, 87%)',
  g900: 'hsl(152, 68%, 96%)',
};

const primary = {
  p000: blue.b000,
  p100: blue.b100,
  p200: blue.b200,
  p300: blue.b300,
  p400: blue.b400,
  p500: blue.b500,
  p600: blue.b600,
  p700: blue.b700,
  p800: blue.b800,
  p900: blue.b900,
};

const accent = {
  a000: turquoise.t000,
  a100: turquoise.t100,
  a200: turquoise.t200,
  a300: turquoise.t300,
  a400: turquoise.t400,
  a500: turquoise.t500,
  a600: turquoise.t600,
  a700: turquoise.t700,
  a800: turquoise.t800,
  a900: turquoise.t900,
};

const misc = {
  shadowNeutral: shadow,
  shadowPrimary: primary.n700,
  bodyBg: white,
  bodyColor: neutral.n200,
  headingColor: neutral.n000,
  danger: red.r500,
  warning: yellow.y500,
  success: green.g500,
};

export const colors = {
  white,
  black,
  ...neutral,
  ...primary,
  ...accent,
  ...red,
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
      lineHeight: 1,
    },
    delta: {
      fontSize: '3.6rem', // 36px
      lineHeight: 1,
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
      fontSize: '1.6rem', // 16px
      lineHeight: 1.5,
    },
    bravo: {
      fontSize: '2rem', // 20px
      lineHeight: 1.5,
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
  },
};

export const fontStack = {
  default:
    // eslint-disable-next-line max-len
    'Noto Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading: 'Lato, sans-serif',
  mono: 'Consolas, monaco, monospace',
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
};

/**
 * `....................layout....................`
 */

export const grid = {
  alpha: {
    cols: 12,
    maxWidth: '46rem', // 460px
    gutter: spacings.bravo,
  },
  bravo: {
    cols: 12,
    maxWidth: '70.8rem', // 708px
    gutter: spacings.delta,
  },
  charlie: {
    cols: 12,
    maxWidth: '88rem', // 880px
    gutter: spacings.delta,
  },
  delta: {
    cols: 12,
    maxWidth: '88rem', // 880px
    gutter: spacings.echo,
  },
};

export const breakpoints = [
  '48rem', // 480px
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
  default: 0,
  absolute: 1,
  drawer: 10,
  select: 20,
  popover: 30,
  tooltip: 31,
  footer: 500,
  header: 600,
  backdrop: 700,
  sidebar: 800,
  modal: 1000,
};
