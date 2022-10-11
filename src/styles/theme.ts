// @packages
import {
  createTheme,
  PaletteOptions,
  responsiveFontSizes,
} from "@mui/material/styles";

// @fonts
import NeueHaas from "./fonts/NeueHaasDisplayRoman.ttf";

const colors = {
  green: "#79B990",
  red: "#ee6352",
  white: "#f5f2f8",
  blue: "#068CB1",
  darkGrey: "#323449",
  grey: "#6A73A0",
  black: "#2C2D3A",
};

type IPalette = PaletteOptions;

const theme = createTheme({
  palette: {
    background: {
      main: colors.white,
    },
    primary: {
      main: colors.blue,
    },
    secondary: {
      main: colors.grey,
      dark: colors.darkGrey,
    },
    success: {
      main: colors.green,
    },
    error: {
      main: colors.red,
    },
    text: {
      primary: colors.black,
      secondary: colors.darkGrey,
    },
    common: {
      black: colors.black,
      white: colors.white,
    },
  } as unknown as IPalette,
  typography: {
    fontFamily: ["NeueHaas", "Roboto"].join(","),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          boxSizing: "content-box",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'NeueHaas';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('NeueHaasDisplayRoman'), local('NeueHaasDisplayRoman'), url(${NeueHaas}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
  },
});

export default responsiveFontSizes(theme);
