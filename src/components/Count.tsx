import { Flex, Text, Button } from "@chakra-ui/react";
import { useCount, useIncrement } from "../hooks";

export default function Count() {
  const count = useCount();
  const { incrementCount, state } = useIncrement();

  function handleIncrement() {
    console.log("clicked");
    incrementCount();
  }

  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="8xl">
        {count ? count.toNumber() : 0}
      </Text>
      <Button colorScheme="teal" size="lg" onClick={handleIncrement}>
        Increment
      </Button>
    </Flex>
  );
}
