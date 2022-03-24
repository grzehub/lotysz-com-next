import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0",
      light: "#B2B4D0",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "Roboto-ffi Bold",
          fontSize: "1rem",
          lineHeight: "1.6rem",
          "@media (max-width:960px)": {},
        },
        subtitle1: {
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontSize: "0.8rem",
          lineHeight: "1.4rem",
          // color: "rgba(0,0,0,0.6)",
        },
        subtitle2: {
          fontFamily: "Roboto",
          fontSize: "0.6rem",
          lineHeight: "1.4rem",
          // color: "rgba(0,0,0,0.6)",
        },
        body1: {
          fontFamily: "Roboto-ffi Regular",
          fontSize: "0.8rem",
          lineHeight: "1.4rem",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Roboto-ffi Regular", "Roboto-ffi Bold", "Roboto"].join(","),
  },
});
