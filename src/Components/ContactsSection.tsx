import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import contactBgimage from "../assets/contact-background.webp";
import { motion } from "framer-motion";

const ContactsSection = () => {
  return (
    <Box
      minHeight="600px"
      width="100%"
      bgImage={contactBgimage}
      bgPosition="center"
      bgSize="cover"
      pos="relative"
      padding="50px 0"
    >
      <Box
        bgColor="#fff"
        width="70%"
        minHeight="400px"
        margin="0 auto"
        padding="40px"
        pos="relative"
        zIndex="2"
      >
        <Heading textAlign="center" fontSize="40px">
          Contact us
        </Heading>
        <SimpleGrid mt="30px" columns={{ sm: 1, md: 2 }} spacing={5}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              borderRadius="0"
              outline="0"
              bgColor="#eee"
              border="1px solid #777"
              placeholder="Address"
              size="lg"
              height="60px"
              fontSize={{ sm: "17px", md: "25px" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              borderRadius="0"
              outline="0"
              bgColor="#eee"
              border="1px solid #777"
              placeholder="Enter your Name"
              size="lg"
              height="60px"
              fontSize={{ sm: "17px", md: "25px" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              type="text"
              borderRadius="0"
              outline="0"
              bgColor="#eee"
              border="1px solid #777"
              placeholder="Enter your phone(e.g +141555526)"
              size="lg"
              height="60px"
              fontSize={{ sm: "17px", md: "25px" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              borderRadius="0"
              outline="0"
              bgColor="#eee"
              border="1px solid #777"
              size="lg"
              height="60px"
              fontSize={{ sm: "17px", md: "25px" }}
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid spacing={5} mt={2}>
          <FormControl>
            <FormLabel mb="8px">Message</FormLabel>
            <Textarea
              borderRadius="0"
              outline="0"
              bgColor="#eee"
              border="1px solid #777"
              placeholder="Enter your message"
              size="lg"
              fontSize={{ sm: "17px", md: "25px" }}
              rows={7}
            />
          </FormControl>
          <Button
            textTransform="uppercase"
            cursor="pointer"
            paddingY="30px"
            color="#fff"
            bg="#000"
            borderRadius="0"
            fontSize={{ sm: "17px", md: "25px" }}
            transition="0.5s"
            _hover={{
              color: "orangered",
              bgColor: "#eee",
            }}
          >
            Submit
          </Button>
        </SimpleGrid>
      </Box>
      <motion.div
        whileInView={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          height: "250px",
          width: "100%",
        }}
      >
        <Box
          bgColor="#ef7a2e"
          height="250px"
          width={{ sm: "80%", md: "90%" }}
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -100%)"
        ></Box>
      </motion.div>
    </Box>
  );
};

export default ContactsSection;
