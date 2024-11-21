import { Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <VStack
      bgColor="#333"
      height="200px"
      color="#fff"
      fontSize="17px"
      paddingY="50px"
      textAlign="center"
    >
      <Text>
        Sample text. Click to select the text box.Click again or double click to
        start editing the text.
      </Text>
      <Text>&copy;built by Mohamed Said Abdirahman</Text>
    </VStack>
  );
};

export default Footer;
