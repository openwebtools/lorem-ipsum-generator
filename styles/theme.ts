import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system" as const,
  useSystemColorMode: true,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("white", "black")(props),
      color: mode("black", "white")(props),
    },
  }),
};

const theme = extendTheme({
  colors: {
    white: "#fbfbff",
    black: "#1c1c1e",
    dark: {
      50: "#f9f9f9",
      100: "#f3f3f3",
      200: "#ebebeb",
      300: "#dcdcdc",
      400: "#b8b8b8",
      500: "#999999",
      600: "#707070",
      700: "#5d5d5d",
      800: "#3e3e3e",
      900: "#1d1d1d",
    },
    light: {
      50: "#fbfbff",
      100: "#f6f6fa",
      200: "#f1f1f5",
      300: "#e7e7eb",
      400: "#c5c5c9",
      500: "#a7a7ab",
      600: "#7d7d81",
      700: "#69696c",
      800: "#49494d",
      900: "#28282b",
    },
  },
  shadows: {},
  styles: styles,
  ...config,
});

export default theme;
