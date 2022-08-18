import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },

    MuiCard: {
      elevation: 0,
    },

    MuiTextField: {
      root: {
        marginTop: 9,
        marginBottom: 8,

        standard: {
          "&&&:before": {
            borderBottom: "none",
          },
          "&&:after": {
            borderBottom: "none",
          },
        },
      },
    },

    MuiButton: {
      outlined: {
        boxShadow: "none",
        borderRadius: 27,
        borderWidth: 2,
      },

      containedPrimary: {
        " &:hover": {
          backgroundColor: "#2c30af",
        },
      },

      outlinedPrimary: {
        boxShadow: "none",
        color: "#dcdcdc",
      },
      containedSizeLarge: {
        color: "#ffffff",
        padding: "14px 50px",
      },
    },
  },
};

const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "Quicksand",
  },
  palette: {
    type: "light",
    action: {
      primary: "#20509e",
    },
    background: {
      default: "#F5F7FB",
      dark: "#f5f6fa",
      paper: colors.common.white,
    },
    primary: {
      main: "#5458E1",
      dark: "#bacfe0",
      light: "#e2e3fa",
    },
    secondary: {
      main: "#0d8af7",
      dark: "#1b242f",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#fff1dc",
    },
    success: {
      main: "#54E18C",
      dark: "#54E18C",
      light: "#e2faec",
    },
    error: {
      main: "#DA1C1C",
      dark: "#DA1C1C",
      light: "#ffe9e6",
    },
    text: {
      primary: "#252631",
      secondary: "#999999",
    },
    common: {
      black: "#222222",
    },
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
