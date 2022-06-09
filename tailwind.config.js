const defaultTheme = require("tailwindcss/defaultTheme");
function pxToRem(px) {
  return px * 0.0625 + "rem";
}

function extendedColumnWidths() {
  const widths = {};
  for (var i = 1; i <= 24; i++) {
    widths[`${i}/24`] = ((100 / 24) * i).toFixed(6) + "%";
  }
  return widths;
}

function gridOffsets() {
  const offsets = {};
  for (var i = 1; i <= 24; i++) {
    offsets[`${i}/24`] = ((100 / 24) * i).toFixed(6) + "%";
  }
  return offsets;
}

module.exports = {
  // mode: 'jit',
  corePlugins: {
    transitionDuration: true,
  },
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        // sm: '',
        // md: '',
        lg: "32px",
        // xl: '',
        // '2xl': '',
      },
    },
    fontFamily: {
      //display: ["Macklin Text", ...defaultTheme.fontFamily.sans],
      body: ["LL Riforma", ...defaultTheme.fontFamily.sans],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.313rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      full: "9999px",
    },
    fontSize: {
      //[fontSize,lineHeight]
      d1: [pxToRem(100), { letterSpacing: "-6px", lineHeight: pxToRem(80) }],
      d2: [pxToRem(72), { letterSpacing: "-3px", lineHeight: pxToRem(72) }],
      d3: [pxToRem(64), { letterSpacing: "-1px", lineHeight: pxToRem(64) }],
      d4: [pxToRem(48), { letterSpacing: "initial", lineHeight: pxToRem(52) }],
      d5: [pxToRem(36), { letterSpacing: "initial", lineHeight: pxToRem(32) }],
      d6: [pxToRem(24), { letterSpacing: "initial", lineHeight: pxToRem(30) }],
      b1: [pxToRem(40), { letterSpacing: "initial", lineHeight: pxToRem(44) }],
      b2: [pxToRem(32), { letterSpacing: "initial", lineHeight: pxToRem(40) }],
      b3: [pxToRem(21), { letterSpacing: "initial", lineHeight: pxToRem(31) }],
      b4: [pxToRem(16), { letterSpacing: "initial", lineHeight: pxToRem(25) }],
      b5: [pxToRem(14), { letterSpacing: "initial" }],
    },
    colors: {
      //Primary Colors
      p1: {
        700: "#1C4953",
        500: "#7FE27B",
      },
      p2: {
        500: "#676784",
        300: "#443F3F",
        900: "#302e2a",
      },

      g1: {
        100: "#7FE27B",
        200: "#1C4953",
        300: "#9c9c9c",
        500: "#E2ECFF"
      },
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      900: "#302e2a",
      500: "#676784",
      300: "#443F3F",
    },
  },
  extend: {
    screens: {
      "3xl": "2560px",
      "4xl": "3840px",
    },
    width: extendedColumnWidths(),
    margin: gridOffsets(),
    borderRadius: {
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.25rem",
    },
    lineClamp: {
      8: "8",
      10: "10",
      12: "12",
      14: "14",
      16: "16",
    },
  },

  variants: {
    extend: {
      transitionDuration: ["hover", "focus"],
      zIndex: ["hover", "active"],
    },
  },
};
