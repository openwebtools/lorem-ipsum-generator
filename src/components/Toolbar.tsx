import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";

const Toolbar = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleColorModeClick = () => {
    toggleColorMode();
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      p={4}
      justify="space-between"
      wrap="wrap"
      {...props}
      direction={["column", "row", "row", "row"]}
    >
      <Flex
        align="center"
        justify="space-between"
        w={["100%", "auto", "auto", "auto"]}
      >
        <NextLink href="/" passHref>
          <Link>
            <Heading as="h1" size="md">
              Lorem Ipsum Generator
            </Heading>
          </Link>
        </NextLink>
        <IconButton
          onClick={toggleMenu}
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
        />
      </Flex>

      <Spacer />

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
