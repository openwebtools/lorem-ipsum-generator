import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";

const Toolbar = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleColorModeClick = () => {
    toggleColorMode();
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      p={4}
      {...props}
      justify="space-between"
      w="100%"
    >
      <NextLink href="/" passHref>
        <Link>
          <Heading as="h1" size="md">
            Lorem Ipsum Generator
          </Heading>
        </Link>
      </NextLink>
      <IconButton
        onClick={handleColorModeClick}
        aria-label="Toggle Color Mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        variant="ghost"
      />
    </Flex>
  );
};

export default Toolbar;
