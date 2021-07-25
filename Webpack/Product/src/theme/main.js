import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    brandColors: {
      darkest: "#143656",
      dark: "#004487",
      pure: "#0054A6",
      light: "#436AB3",
      lightest: "#8394CA",
    },
    interactiveColors: {
      darkest: "#89191C",
      dark: "#BE191E",
      pure: "#ED1D24",
      light: "#FF3D51",
      lightest: "#FB9DA6",
    },
    globalColors: {
      neutrals: {
        black: "#143656",
        darkest: "#004487",
        dark: "#0054A6",
        pure: "#436AB3",
        light: "#8394CA",
        lightest: "#E6EEFF",
        whiteBg: "#F2F2F2",
        white: "#FFFFFF",
      },
      feedback: {
        blue: {
          pure: "#007DC5",
          light: "#80BEE2",
          lightest: "#CCE5F3",
        },
        green: {
          pure: "#D14A4A",
          light: "#FFC0C0",
          lightest: "#FFE4E4",
        },
        red: {
          pure: "#237B4B",
          light: "#6FCF97",
          lightest: "#DBF8E8",
        },
        brown: {
          pure: "#B27A0B",
          light: "#E7CE87",
          lightest: "#FFF7DF",
        },
      },
    },
    badges: {
      blue: "#93CFF1",
      yellow: "#FFD049",
      green: "#C6E3D3",
      coral: "#FFCEAB",
    }
  },
  typography: {
    fontFamily: 'Roboto',
  },
});
export default theme;
