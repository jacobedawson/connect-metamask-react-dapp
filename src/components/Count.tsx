import { Flex, Text, Button } from "@chakra-ui/react";

export default function Count() {
  return (
    <Flex direction="column" align="center">
      <Text color="white" fontSize="8xl">
        0
      </Text>
      <Button colorScheme="teal" size="lg">
        Increment
      </Button>
    </Flex>
  );
}
