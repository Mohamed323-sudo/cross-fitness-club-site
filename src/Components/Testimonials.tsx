import { Avatar, Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import testimonial1 from "../assets/testimonials1.webp";
import testimonial2 from "../assets/testimonials2.webp";
import testimonial3 from "../assets/testimonials3.webp";
import testimonial4 from "../assets/testimonials4.webp";
import testimonial5 from "../assets/testimonials5.webp";
import testimonial6 from "../assets/testimonials6.webp";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <Box>
      <motion.div
        whileInView={{ rotateX: 360, opacity: 1 }}
        initial={{ rotateX: 180, opacity: 0 }}
        style={{ perspective: "1000" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Heading
          textAlign="center"
          fontSize={{ sm: "30px", md: "40px", lg: "80px" }}
          margin="0 15%"
          paddingTop="80px"
          fontWeight="800"
          fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        >
          Testimonials
        </Heading>
      </motion.div>
      <SimpleGrid
        width="85%"
        margin="0 auto"
        columns={{ sm: 1, lg: 2 }}
        spacing={20}
        padding="80px 0"
      >
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "400px", opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Flex flex="1" alignItems="center" gap={10}>
            <Avatar src={testimonial1} size="2xl" border="15px solid #ef7a2e" />
            <Box>
              <Text fontSize={{ sm: "20px", md: "30px" }} color="gray.600">
                Sample text.Click to select the text box.Click again or double
                click to start editing the text.
              </Text>
              <Heading
                size={{ sm: "sm", md: "md" }}
                color="#ef7a2e"
                marginTop="30px"
                textTransform="uppercase"
                letterSpacing="5px"
              >
                Stella larson
              </Heading>
            </Box>
          </Flex>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "400px", opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Flex flex="1" alignItems="center" gap={10}>
            <Avatar src={testimonial2} size="2xl" border="15px solid #ef7a2e" />
            <Box>
              <Text fontSize={{ sm: "20px", md: "30px" }} color="gray.600">
                Sample text.Click to select the text box.Click again or double
                click to start editing the text.
              </Text>
              <Heading
                size={{ sm: "sm", md: "md" }}
                color="#ef7a2e"
                marginTop="30px"
                textTransform="uppercase"
                letterSpacing="5px"
              >
                Nick Jhonson
              </Heading>
            </Box>
          </Flex>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "400px", opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Flex flex="1" alignItems="center" gap={10}>
            <Avatar src={testimonial3} size="2xl" border="15px solid #ef7a2e" />
            <Box>
              <Text fontSize={{ sm: "20px", md: "30px" }} color="gray.600">
                Sample text.Click to select the text box.Click again or double
                click to start editing the text.
              </Text>
              <Heading
                size={{ sm: "sm", md: "md" }}
                color="#ef7a2e"
                marginTop="30px"
                textTransform="uppercase"
                letterSpacing="5px"
              >
                Olga ivanova
              </Heading>
            </Box>
          </Flex>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "400px", opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Flex flex="1" alignItems="center" gap={10}>
            <Avatar src={testimonial4} size="2xl" border="15px solid #ef7a2e" />
            <Box>
              <Text fontSize={{ sm: "20px", md: "30px" }} color="gray.600">
                Sample text.Click to select the text box.Click again or double
                click to start editing the text.
              </Text>
              <Heading
                size={{ sm: "sm", md: "md" }}
                color="#ef7a2e"
                marginTop="30px"
                textTransform="uppercase"
                letterSpacing="5px"
              >
                Paul Hudson
              </Heading>
            </Box>
          </Flex>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "400px", opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Flex flex="1" alignItems="center" gap={10}>
            <Avatar src={testimonial5} size="2xl" border="15px solid #ef7a2e" />
            <Box>
              <Text fontSize={{ sm: "20px", md: "30px" }} color="gray.600">
                Sample text.Click to select the text box.Click again or double
                click to start editing the text.
              </Text>
              <Heading
                size={{ sm: "sm", md: "md" }}
                color="#ef7a2e"
                marginTop="30px"
                textTransform="uppercase"
                letterSpacing="5px"
              >
                Cash hudson
              </Heading>
            </Box>
          </Flex>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "400px", opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Flex flex="1" alignItems="center" gap={10}>
            <Avatar src={testimonial6} size="2xl" border="15px solid #ef7a2e" />
            <Box>
              <Text fontSize={{ sm: "20px", md: "30px" }} color="gray.600">
                Sample text.Click to select the text box.Click again or double
                click to start editing the text.
              </Text>
              <Heading
                size={{ sm: "sm", md: "md" }}
                color="#ef7a2e"
                marginTop="30px"
                textTransform="uppercase"
                letterSpacing="5px"
              >
                Mike Perry
              </Heading>
            </Box>
          </Flex>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
