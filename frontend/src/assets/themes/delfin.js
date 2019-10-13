/**
 * `....................colours....................`
 */

const white = '#FFFFFF';
const black = '#0F131A';

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

const pink = {
  p000: 'hsl(320, 100%, 19%)',
  p100: 'hsl(322, 93%, 27%)',
  p200: 'hsl(324, 93%, 33%)',
  p300: 'hsl(326, 90%, 39%)',
  p400: 'hsl(328, 85%, 46%)',
  p500: 'hsl(330, 79%, 56%)',
  p600: 'hsl(334, 86%, 67%)',
  p700: 'hsl(336, 100%, 77%)',
  p800: 'hsl(338, 100%, 86%)',
  p900: 'hsl(341, 100%, 95%)',
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
  p000: pink.p000,
  p100: pink.p100,
  p200: pink.p200,
  p300: pink.p300,
  p400: pink.p400,
  p500: pink.p500,
  p600: pink.p600,
  p700: pink.p700,
  p800: pink.p800,
  p900: pink.p900,
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
  shadow: '#0C0F14',
  bodyBg: neutral.n000,
  bodyColor: neutral.n900,
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
      fontSize: '1.7rem', // 17px
      lineHeight: '2.4rem', // 24px
    },
    bravo: {
      fontSize: '1.9rem', // 19px
      lineHeight: '2.4rem', // 24px
    },
    charlie: {
      fontSize: '2.2rem', // 22px
      lineHeight: '2.4rem', // 24px
    },
    delta: {
      fontSize: '2.4rem', // 24px
      lineHeight: '3.2rem', // 32px
    },
    echo: {
      fontSize: '2.8rem', // 28px
      lineHeight: '3.2rem', // 32px
    },
    foxtrot: {
      fontSize: '3.6rem', // 36px
      lineHeight: '4.4rem', // 44px
    },
    golf: {
      fontSize: '4.2rem', // 42px
      lineHeight: '4.8rem', // 48px
    },
    hotel: {
      fontSize: '6rem', // 60px
      lineHeight: '66rem', // 66px
    },
    india: {
      fontSize: '7.2rem', // 72px
      lineHeight: '7.8rem', // 78px
    },
    juliett: {
      fontSize: '8.4rem', // 84px
      lineHeight: '90rem', // 90px
    },
    kilo: {
      fontSize: '9.6rem', // 96px
      lineHeight: '10.02rem', // 102px
    },
    lima: {
      fontSize: '10.08rem', // 108px
      lineHeight: '10.16rem', // 116px
    },
  },
  subHeadings: {
    alpha: {
      fontSize: '1.2rem', // 12px
      lineHeight: '2rem', // 20px
    },
    bravo: {
      fontSize: '1.4rem', // 14px
      lineHeight: '1.8rem', // 18px
    },
  },
  text: {
    alpha: {
      fontSize: '1.3rem', // 13px
      lineHeight: '2rem', // 20px
    },
    bravo: {
      fontSize: '1.6rem', // 16px
      lineHeight: '2.4rem', // 24px
    },
    charlie: {
      fontSize: '1.8rem', // 18px
      lineHeight: '2.8rem', // 28px
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
  delta: '2.4rem', // 24px
  echo: '3.2rem', // 32px
  foxtrot: '6.4rem', // 64px
};

export const borderRadius = {
  alpha: '1px',
  bravo: '4px',
  charlie: '5px',
};

export const borderWidth = {
  alpha: '1px',
  bravo: '2px',
};

/**
 * `....................layout....................`
 */

export const grid = {
  default: {
    priority: 0,
    breakpoint: 'default',
    cols: 12,
    maxWidth: '880px',
    gutter: spacings.delta,
  },
  untilBravo: {
    priority: 1,
    breakpoint: 'untilBravo',
    cols: 12,
    maxWidth: '400px',
    gutter: spacings.bravo,
  },
  bravo: {
    priority: 2,
    breakpoint: 'bravo',
    cols: 12,
    maxWidth: '600px',
    gutter: spacings.delta,
  },
  charlie: {
    priority: 3,
    breakpoint: 'charlie',
    cols: 12,
    maxWidth: '760px',
    gutter: spacings.echo,
  },
  delta: {
    priority: 4,
    breakpoint: 'delta',
    cols: 12,
    maxWidth: '880px',
    gutter: spacings.echo,
  },
  afterEcho: {
    priority: 5,
    breakpoint: 'foxtrot',
    cols: 12,
    maxWidth: '1200px',
    gutter: spacings.echo,
  },
};

export const breakpoints = {
  untilBravo: '(max-width: 479px)',
  bravo: 480,
  bravoToCharlie: '(min-width: 480px) and (max-width: 767px)',
  charlie: 768,
  untilCharlie: '(max-width: 767px)',
  charlieToDelta: '(min-width: 768px) and (max-width: 959px)',
  delta: 960,
  deltaToEcho: '(min-width: 960px) and (max-width: 1279px)',
  echo: 1280,
  afterEcho: '(min-width: 1280px)',
};

// TODO write function to handle media query creation
// export const mq = createMediaQueries(breakpoints);

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
  header: 600,
  backdrop: 700,
  sidebar: 800,
  modal: 1000,
};

export const palette = {
  divider: 'rgba(0, 0, 0, 0.12)',
};
