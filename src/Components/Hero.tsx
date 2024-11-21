import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import heroImg from "../assets/header-img.webp";
import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <SimpleGrid
        minHeight="500px"
        spacing={4}
        columns={{ sm: 1, lg: 2 }}
        bg="#000"
        ref={scrollRef}
        style={{ overflow: "hidden" }}
      >
        <Box>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0, opacity: 0, transformOrigin: "left" }}
            transition={{ duration: 1.5, delay: 1.5 }} //
          >
            <Image src={heroImg} />
          </motion.div>
        </Box>
        <Box padding="30px 60px 30px 40px" color="white">
          <motion.div
            whileInView={{ translateX: 0, opacity: 1 }}
            initial={{ translateX: "300px", opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            viewport={{ root: scrollRef }}
          >
            <Heading
              textTransform="uppercase"
              fontSize="30px"
              letterSpacing="2px"
              fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
            >
              Cross fitness club
            </Heading>
            <motion.div
              whileInView={{ rotateX: 360, opacity: 1 }}
              initial={{ rotateX: 180, opacity: 0 }}
              style={{ perspective: "1000" }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              <Heading
                fontSize="90px"
                width="80%"
                textTransform="capitalize"
                fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                lineHeight="80px"
                marginBottom="30px"
              >
                More than just a gym!
              </Heading>
            </motion.div>
            <Text fontSize="25px" lineHeight="30px">
              We will develop a programme that will meet your individual needs.
              We are committed to helping you achieve your fitness goals.
            </Text>
            <Button
              variant="outline"
              borderWidth={3}
              borderRadius="0"
              colorScheme="white"
              marginTop="70px"
              paddingY="30px"
              paddingX="60px"
              cursor="pointer"
              textTransform="uppercase"
              fontSize="20px"
              letterSpacing="2px"
              transition="0.5s"
              _hover={{
                backgroundColor: "#fff",
                color: "#000",
              }}
            >
              Join now
            </Button>
          </motion.div>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Hero;
