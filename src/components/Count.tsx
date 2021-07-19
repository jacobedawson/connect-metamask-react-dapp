import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useCount, useIncrement, useSetCount } from "../hooks";

export default function Count() {
  const count = useCount();
  const { state, send: incrementCount } = useIncrement();
  const { state: setCountState, send: setCount } = useSetCount();
  const [input, setInput] = useState("");

  function handleIncrement() {
    incrementCount();
  }

  function handleSetCount() {
    const _count = parseInt(input);
    if (_count) {
      setCount(_count);
    }
  }

  function handleInput(valueAsString: string, valueAsNumber: number) {
    setInput(valueAsString);
  }

  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="8xl">
        {count ? count.toNumber() : 0}
      </Text>
      <Button colorScheme="teal" size="lg" onClick={handleIncrement}>
        Increment
      </Button>
      <Box mt={4}>
        <NumberInput
          mb={2}
          min={1}
          value={input}
          onChange={handleInput}
          color="white"
          clampValueOnBlur={false}
        >
          <NumberInputField />
        </NumberInput>
        <Button isFullWidth colorScheme="purple" onClick={handleSetCount}>
          Set Count
        </Button>
      </Box>
    </Flex>
  );
}
