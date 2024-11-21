import { Box, Button, CloseButton, VStack } from "@chakra-ui/react";

const SideNav = () => {
  return (
    <Box
      w="300px"
      height="100vh"
      bgColor="#000"
      pos="fixed"
      top="0"
      left={isVisible ? 0 : "-300px"}
      zIndex="3"
      transition="0.5s"
    >
      <CloseButton
        color="#fff"
        width="2em"
        height="2em"
        pos="relative"
        margin="30px"
        right="-200px"
        onClick={() => handleClick()}
      />
      <VStack mt="50px">
        <Button
          as="a"
          variant="link"
          color="#fff"
          fontSize="25px"
          _hover={{
            color: "#999",
            textDecoration: "none",
          }}
          transition="0.5s"
        >
          About club
        </Button>
        <Button
          as="a"
          variant="link"
          color="#fff"
          fontSize="25px"
          _hover={{
            color: "#999",
            textDecoration: "none",
          }}
          transition="0.5s"
        >
          Page 2
        </Button>
      </VStack>
    </Box>
  );
};

export default SideNav;
