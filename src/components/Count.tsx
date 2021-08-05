import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useCount, useContractMethod } from "../hooks";
import { utils } from "ethers";

export default function Count() {
  const count = useCount();
  const { state, send: incrementCount } = useContractMethod("incrementCount");
  const { state: setCountState, send: setCount } =
    useContractMethod("setCount");
  const { state: twoVariablesState, send: setTwoVariables } =
    useContractMethod("takeTwoVariables");
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

  function handleTwoVariables() {
    const _count = parseInt(input);
    if (_count) {
      setTwoVariables(_count, 2, {
        value: utils.parseEther("0.05"),
      });
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
        <Button isFullWidth colorScheme="purple" onClick={handleTwoVariables}>
          Set Count
        </Button>
      </Box>
    </Flex>
  );
}
