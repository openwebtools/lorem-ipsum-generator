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
import { GenerationType } from "../src/models/generationType";

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

  const [generatedText, setGeneratedText] = useState([]);
  const [generationCount, setGenerationCount] = useState(2);
  const [generationType, setGenerationType] = useState(
    GenerationType.Paragraphs
  );

  const { onCopy } = useClipboard(generatedText.join("\n"));

  useEffect(() => {
    if (!generationCount) {
      setGenerationCount(0);
      return;
    }
    const texts = getGeneratedText();
    setGeneratedText(texts);
  }, [generationCount, generationType]);

  const handleCopyClick = () => {
    onCopy();
    showSuccessToast();
  };

  const getGeneratedText = (): string[] => {
    switch (generationType) {
      case GenerationType.Paragraphs:
        return lorem.generateParagraphs(generationCount).split("\n");
      case GenerationType.Sentances:
        return [lorem.generateSentences(generationCount)];
      case GenerationType.Words:
        return [lorem.generateWords(generationCount)];
    }
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
              defaultValue={generationCount}
              min={1}
              max={100}
              width={["30%", "30%", "20%", "10%"]}
              onChange={(_, valueNumber) => setGenerationCount(valueNumber)}
              value={generationCount}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Select
              variant="filled"
              w={["70%", "70%", "80%", "auto"]}
              value={generationType}
              onChange={(x) => setGenerationType(Number(x.target.value))}
            >
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
        <Box>
          {generatedText.map((x, i) => (
            <Text key={i}>
              {x}
              <br />
              <br />
            </Text>
          ))}
        </Box>
      </VStack>
    </Layout>
  );
}
