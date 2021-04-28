import React, { useEffect, useState } from "react";
import Layout from "../src/components/Layout";
import { LoremIpsum } from "lorem-ipsum";
import {
  Box,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  VStack,
  Text,
  Button,
  Divider,
  useToast,
  useClipboard,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

export default function Home() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  const toast = useToast();
  const showSuccessToast = () =>
    toast({
      title: "Text Copied",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

  const [generatedText, setGeneratedText] = useState("");
  const { onCopy } = useClipboard(generatedText);

  useEffect(() => {
    const text = lorem.generateParagraphs(1);
    setGeneratedText(text);
  }, []);

  const handleCopyClick = () => {
    onCopy();
    showSuccessToast();
  };

  return (
    <Layout
      title="Lorem Ipsum Generator | Open Web Tools"
      p={4}
      justify="center"
      align="top"
    >
      <VStack spacing={4} align="stretch" w={["100%", "80%", "70%", "60%"]}>
        <Text size="md" align="center">
          A simple tool to generate Lorem Ipsum placeholder text
        </Text>
        <Stack
          justify="space-between"
          direction={["column", "row", "row", "row"]}
          spacing={4}
        >
          <HStack spacing="24px" w="100%">
            <NumberInput
              variant="filled"
              w="auto"
              defaultValue={2}
              min={1}
              max={100}
              maxW={20}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Select variant="filled" w={["100%", "60%", "auto", "auto"]}>
              <option value="1">Paragraphs</option>
              <option value="2">Sentences</option>
              <option value="3">Words</option>
            </Select>
          </HStack>
          <Button
            colorScheme="green"
            leftIcon={<CopyIcon />}
            onClick={handleCopyClick}
          >
            Copy
          </Button>
        </Stack>
        <Divider />
        <Box>{generatedText}</Box>
      </VStack>
    </Layout>
  );
}
