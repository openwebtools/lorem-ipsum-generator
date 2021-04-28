import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../styles/theme";
function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <style jsx global>
        {`
          html,
          body,
          #app,
          #__next {
            height: 100%;
          }
        `}
      </style>
    </>
  );
}

export default App;
