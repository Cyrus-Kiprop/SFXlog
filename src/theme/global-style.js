import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// theme provider object
export const theme = {
  font: {
    sans: "Cambay, sans-serif",
    serif: "Arvo, sans",
    fira: "Fira Code, san-serif",
    monospace: '"Ubuntu Mono", monospace',
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },

  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  spacing: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },

  colours: {
    transparent: "transparent",

    black: "#000",
    white: "#fff",

    gray: {
      100: "#f7fafc",
      200: "#edf2f7",
      300: "#e2e8f0",
      400: "#cbd5e0",
      500: "#a0aec0",
      600: "#718096",
      700: "#4a5568",
      800: "#2d3748",
      900: "#1a202c",
    },
    red: {
      100: "#fff5f5",
      200: "#fed7d7",
      300: "#feb2b2",
      400: "#fc8181",
      500: "#f56565",
      600: "#e53e3e",
      700: "#c53030",
      800: "#9b2c2c",
      900: "#742a2a",
    },
    orange: {
      100: "#fffaf0",
      200: "#feebc8",
      300: "#fbd38d",
      400: "#f6ad55",
      500: "#ed8936",
      600: "#dd6b20",
      700: "#c05621",
      800: "#9c4221",
      900: "#7b341e",
    },
    yellow: {
      100: "#fffff0",
      200: "#fefcbf",
      300: "#faf089",
      400: "#f6e05e",
      500: "#ecc94b",
      600: "#d69e2e",
      700: "#b7791f",
      800: "#975a16",
      900: "#744210",
    },
    green: {
      100: "#f0fff4",
      200: "#c6f6d5",
      300: "#9ae6b4",
      400: "#68d391",
      500: "#48bb78",
      600: "#38a169",
      700: "#2f855a",
      800: "#276749",
      900: "#22543d",
    },
    teal: {
      100: "#e6fffa",
      200: "#b2f5ea",
      300: "#81e6d9",
      400: "#4fd1c5",
      500: "#38b2ac",
      600: "#319795",
      700: "#2c7a7b",
      800: "#285e61",
      900: "#234e52",
    },
    blue: {
      100: "#ebf8ff",
      200: "#bee3f8",
      300: "#90cdf4",
      400: "#63b3ed",
      500: "#4299e1",
      600: "#3182ce",
      700: "#2b6cb0",
      800: "#2c5282",
      900: "#2a4365",
    },
    indigo: {
      100: "#ebf4ff",
      200: "#c3dafe",
      300: "#a3bffa",
      400: "#7f9cf5",
      500: "#667eea",
      600: "#5a67d8",
      700: "#4c51bf",
      800: "#434190",
      900: "#3c366b",
    },
    purple: {
      100: "#faf5ff",
      200: "#e9d8fd",
      300: "#d6bcfa",
      400: "#b794f4",
      500: "#9f7aea",
      600: "#805ad5",
      700: "#6b46c1",
      800: "#553c9a",
      900: "#44337a",
    },
    pink: {
      100: "#fff5f7",
      200: "#fed7e2",
      300: "#fbb6ce",
      400: "#f687b3",
      500: "#ed64a6",
      600: "#d53f8c",
      700: "#b83280",
      800: "#97266d",
      900: "#702459",
    },
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

export const GlobalStyle = createGlobalStyle`
${reset}
html {
    box-sizing: border-box;
    --webkit-box-sizing: border-box;
    --moz-box-sizing: border-box;
    scroll-behavior: smooth;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    font-family: ${({ theme }) => theme.font.fira};
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colours.gray[900]};
    --color-text: hsl(0deg, 0%, 100%);
    --color-background: hsl(210deg, 30%, 8%);
    --color-blurred-background: hsla(210deg, 30%, 8%, 0.85);
    --color-primary: hsl(333deg, 100%, 52%);
    --color-secondary: hsl(230deg, 92%, 63%);
    --color-tertiary: hsl(53deg, 100%, 50%);
    --color-decorative: hsl(200deg, 50%, 60%);
    --color-muted: hsl(210deg, 38%, 15%);
    --color-muted-background: hsla(210deg, 38%, 15%, 0.85);
    --color-info: hsl(230deg, 92%, 63%);
    --color-success: hsl(160deg, 100%, 40%);
    --color-success-background: hsla(160deg, 100%, 40%, 0.1);
    --color-error: hsl(340deg, 95%, 60%);
    --color-error-background: hsla(340deg, 95%, 43%, 0.1);
    --color-alert: hsl(30deg, 100%, 50%);
    --color-alert-background: hsla(38deg, 100%, 50%, 0.1);
    --color-venn-0: hsl(250deg, 100%, 50%);
    --color-venn-1: hsl(175deg, 100%, 50%);
    --color-gray-100: hsl(210deg, 15%, 20%);
    --color-gray-200: hsl(210deg, 15%, 25%);
    --color-gray-300: hsl(210deg, 10%, 40%);
    --color-gray-400: hsl(210deg, 9%, 45%);
    --color-gray-500: hsl(210deg, 8%, 50%);
    --color-gray-600: hsl(210deg, 12%, 55%);
    --color-gray-700: hsl(210deg, 14%, 66%);
    --color-gray-900: hsl(210deg, 25%, 88%);
    --color-gray-1000: hsl(210deg, 25%, 96%);
    --color-subtle-background: hsl(210deg, 30%, 8%);
    --color-subtle-floating: hsl(210deg, 22%, 15%);
    --color-homepage-light: hsla(200deg, 100%, 85%, 0);
    --color-homepage-dark: hsla(200deg, 100%, 85%, 0.1);
    --color-homepage-bg: hsl(210deg, 30%, 8%);
    --syntax-bg: hsl(210deg, 30%, 12%);
    --syntax-highlight: hsl(210deg, 30%, 18%);
    --syntax-txt: #FFF;
    --syntax-comment: #6c8998;
    --syntax-prop: #FF39A8;
    --syntax-bool: #FFD600;
    --syntax-val: #61747D;
    --syntax-str: rgb(155, 109, 255);
    --syntax-name: #C653FF;
    --syntax-del: #FF5555;
    --syntax-regex: #ffd700;
    --syntax-fn: rgb(0, 190, 255);
    --prefers-dark: true;
    --scrollbar-width: 12px;
    --font-weight-bold: 500;
    --font-weight-medium: 400;
    --font-weight-light: 300;
    --font-family: "Wotfard",Futura,-apple-system,sans-serif;
    --font-family-mono: "League Mono","Fira Mono",monospace;
    --reach-dialog: 1; 
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
}
*, *:before, *:after {
    box-sizing: inherit;
}
body {
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    /* background-color: ${({ theme }) => theme.colours.white}; */
    background-color: #100e17;

  
    font-size: 14px;
   
    line-height: 24px;
    font-weight: 500;
    /* overflow-x: hidden !important; */
    text-align: left;
    position: relative;
    color: #999999;
    opacity: 0.9;
}

.dark-bg {
    background-color: #202026;
}


`;
