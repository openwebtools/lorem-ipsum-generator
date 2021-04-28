import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children, title, ...rest }: any) => {
  return (
    <Flex direction="column" h="100%">
      <Head>
        <title>{title}</title>
      </Head>
      <Toolbar />
      <Flex flex="1" {...rest}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
