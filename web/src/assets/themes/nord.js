// ....................colours....................

const white = '#FFFFFF';
const black = '#0F131A';

const neutral = {
  n000: 'hsla(220, 16%, 22%, 1)', // Nord Polar Night
  n100: 'hsla(222, 16%, 28%, 1)', // Nord Polar Night
  n200: 'hsla(220, 17%, 32%, 1)', // Nord Polar Night
  n300: 'hsla(220, 16%, 36%, 1)', // Nord Polar Night
  n400: 'hsla(220, 17%, 40%, 1)',
  n500: 'hsla(219, 28%, 88%, 1)', // Nord Snow Storm
  n600: 'hsla(218, 27%, 92%, 1)', // Nord Snow Storm
  n700: 'hsla(218, 27%, 94%, 1)', // Nord Snow Storm
  n800: 'hsla(220, 27%, 96%, 1)',
  n900: 'hsla(220, 27%, 98%, 1)',
};

const aqua = {
  a000: 'hsla(193, 21%, 43%, 1)',
  a100: 'hsla(194, 21%, 49%, 1)',
  a200: 'hsla(193, 26%, 55%, 1)',
  a300: 'hsla(193, 32%, 60%, 1)',
  a400: 'hsla(193, 43%, 67%, 1)', // Nord Frost
  a500: 'hsla(179, 25%, 65%, 1)', // Nord Frost
  a600: 'hsla(179, 25%, 68%, 1)',
  a700: 'hsla(178, 25%, 71%, 1)',
  a800: 'hsla(178, 25%, 74%, 1)',
  a900: 'hsla(178, 25%, 77%, 1)',
};

const blue = {
  b000: 'hsla(213, 30%, 19%, 1)',
  b100: 'hsla(213, 30%, 24%, 1)',
  b200: 'hsla(212, 29%, 33%, 1)',
  b300: 'hsla(213, 29%, 43%, 1)',
  b400: 'hsla(213, 32%, 52%, 1)', // Nord Frost
  b500: 'hsla(210, 34%, 63%, 1)', // Nord Frost
  b600: 'hsla(209, 34%, 70%, 1)',
  b700: 'hsla(209, 34%, 76%, 1)',
  b800: 'hsla(209, 33%, 83%, 1)',
  b900: 'hsla(210, 35%, 90%, 1)',
};

const lavender = {
  l000: 'hsla(311, 12%, 17%, 1)',
  l100: 'hsla(313, 12%, 23%, 1)',
  l200: 'hsla(311, 12%, 29%, 1)',
  l300: 'hsla(310, 12%, 40%, 1)',
  l400: 'hsla(312, 13%, 52%, 1)',
  l500: 'hsla(311, 20%, 63%, 1)', // Nord Aurora
  l600: 'hsla(312, 20%, 70%, 1)',
  l700: 'hsla(313, 20%, 76%, 1)',
  l800: 'hsla(311, 20%, 83%, 1)',
  l900: 'hsla(312, 19%, 90%, 1)',
};

const red = {
  r000: 'hsla(355, 33%, 16%, 1)',
  r100: 'hsla(355, 32%, 21%, 1)',
  r200: 'hsla(354, 32%, 26%, 1)',
  r300: 'hsla(354, 33%, 36%, 1)',
  r400: 'hsla(355, 32%, 46%, 1)',
  r500: 'hsla(354, 42%, 56%, 1)', // Nord Aurora
  r600: 'hsla(354, 42%, 64%, 1)',
  r700: 'hsla(354, 42%, 72%, 1)',
  r800: 'hsla(354, 41%, 80%, 1)',
  r900: 'hsla(353, 42%, 88%, 1)',
};

const orange = {
  o000: 'hsla(14, 30%, 17%, 1)',
  o100: 'hsla(15, 30%, 23%, 1)',
  o200: 'hsla(15, 30%, 29%, 1)',
  o300: 'hsla(14, 30%, 40%, 1)',
  o400: 'hsla(14, 32%, 52%, 1)',
  o500: 'hsla(14, 51%, 63%, 1)', // Nord Aurora
  o600: 'hsla(14, 50%, 69%, 1)',
  o700: 'hsla(14, 50%, 76%, 1)',
  o800: 'hsla(14, 49%, 83%, 1)',
  o900: 'hsla(14, 50%, 90%, 1)',
};

const yellow = {
  y000: 'hsla(40, 26%, 20%, 1)',
  y100: 'hsla(39, 26%, 27%, 1)',
  y200: 'hsla(40, 25%, 34%, 1)',
  y300: 'hsla(40, 26%, 47%, 1)',
  y400: 'hsla(40, 39%, 60%, 1)',
  y500: 'hsla(40, 71%, 73%, 1)', // Nord Aurora
  y600: 'hsla(40, 70%, 78%, 1)',
  y700: 'hsla(39, 70%, 83%, 1)',
  y800: 'hsla(40, 68%, 88%, 1)',
  y900: 'hsla(39, 68%, 93%, 1)',
};

const green = {
  g000: 'hsla(92, 14%, 18%, 1)',
  g100: 'hsla(92, 16%, 24%, 1)',
  g200: 'hsla(91, 15%, 30%, 1)',
  g300: 'hsla(93, 15%, 41%, 1)',
  g400: 'hsla(92, 17%, 53%, 1)',
  g500: 'hsla(92, 28%, 65%, 1)', // Nord Aurora
  g600: 'hsla(92, 28%, 71%, 1)',
  g700: 'hsla(92, 28%, 77%, 1)',
  g800: 'hsla(91, 28%, 84%, 1)',
  g900: 'hsla(94, 28%, 90%, 1)',
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
  bodyBg: neutral.n900,
  bodyColor: neutral.n100,
  brandColor: primary.p400,
  headingColor: neutral.n300,
  subheadingColor: neutral.n200,
  shadowNeutral: neutral.n500,
  shadowPrimary: primary.p400,
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

// ....................typography....................

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

// ....................sizes....................

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
  alpha: 12, // 12px
  bravo: 14, // 14px
  charlie: 16, // 16px
  delta: 18, // 18px
  echo: 20, // 20px
  foxtrot: 24, // 24px
  golf: 28, // 28px
  hotel: 32, // 32px
  india: 48, // 48px
  juliett: 64, // 64px
  kilo: 84, // 84px
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

// ....................layout....................

export const grid = {
  alpha: {
    cols: 8,
    maxWidth: '34.6rem', // 346px
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

// ....................misc....................

export const transitions = {
  fast: '100ms ease-in-out',
  default: '150ms ease-in-out',
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
