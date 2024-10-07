import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import format1 from "../assets/format1.webp";
import format2 from "../assets/format2.webp";
import format3 from "../assets/format3.webp";
import format4 from "../assets/format4.webp";
import format5 from "../assets/format5.webp";
import format6 from "../assets/format6.webp";
import { motion } from "framer-motion";

const FormatsSection = () => {
  return (
    <Box>
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: "-300px" }}
        transition={{ duration: 1.5 }}
      >
        <Heading
          textAlign="center"
          fontSize={{ md: "40px", lg: "80px" }}
          margin="0 15%"
          paddingTop="80px"
          fontWeight="800"
          fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        >
          Formats
        </Heading>
      </motion.div>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: "400px", opacity: 0, position: "relative" }}
        transition={{ duration: 1.5 }}
      >
        <SimpleGrid
          width="85%"
          margin="0 auto"
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={5}
          padding="80px 0"
        >
          <Flex
            bgImage={format1}
            bgPosition="center"
            bgSize="cover"
            height="500px"
            color="#fff"
            padding="30px 40px"
            align="end"
          >
            <Box width="100%">
              <Divider />
              <Heading
                fontSize={{ sm: "20px", lg: "40px" }}
                fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                marginTop="20px"
                fontWeight="600"
              >
                Strength & Pilates
              </Heading>
              <Text
                marginTop="20px"
                color="#d3c7c7"
                fontSize={{ sm: "17px", lg: "30px" }}
              >
                Lorem ipsum dolor sit amet.
              </Text>
            </Box>
          </Flex>
          <Flex
            bgImage={format2}
            bgPosition="center"
            bgSize="cover"
            height="500px"
            color="#fff"
            padding="30px 40px"
            align="end"
          >
            <Box width="100%">
              <Divider />
              <Heading
                fontSize={{ sm: "20px", lg: "40px" }}
                fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                marginTop="20px"
                fontWeight="600"
              >
                Cycling Revolution
              </Heading>
              <Text
                marginTop="20px"
                color="#d3c7c7"
                fontSize={{ sm: "17px", lg: "30px" }}
              >
                Lorem ipsum dolor sit amet.
              </Text>
            </Box>
          </Flex>
          <Flex
            bgImage={format3}
            bgPosition="center"
            bgSize="cover"
            height="500px"
            color="#fff"
            padding="30px 40px"
            align="end"
          >
            <Box width="100%">
              <Divider />
              <Heading
                fontSize={{ sm: "20px", lg: "40px" }}
                fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                marginTop="20px"
                fontWeight="600"
              >
                Punch, Kick & Fly!
              </Heading>
              <Text
                marginTop="20px"
                color="#d3c7c7"
                fontSize={{ sm: "17px", lg: "30px" }}
              >
                Lorem ipsum dolor sit amet.
              </Text>
            </Box>
          </Flex>
          <Flex
            bgImage={format4}
            bgPosition="center"
            bgSize="cover"
            height="500px"
            color="#fff"
            padding="30px 40px"
            align="end"
          >
            <Box width="100%">
              <Divider />
              <Heading
                fontSize={{ sm: "20px", lg: "40px" }}
                fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                marginTop="20px"
                fontWeight="600"
              >
                Strength & Cardio
              </Heading>
              <Text
                marginTop="20px"
                color="#d3c7c7"
                fontSize={{ sm: "17px", lg: "30px" }}
              >
                Lorem ipsum dolor sit amet.
              </Text>
            </Box>
          </Flex>
          <Flex
            bgImage={format5}
            bgPosition="center"
            bgSize="cover"
            height="500px"
            color="#fff"
            padding="30px 40px"
            align="end"
          >
            <Box width="100%">
              <Divider />
              <Heading
                fontSize={{ sm: "20px", lg: "40px" }}
                fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                marginTop="20px"
                fontWeight="600"
              >
                Total Body
              </Heading>
              <Text
                marginTop="20px"
                color="#d3c7c7"
                fontSize={{ sm: "17px", lg: "30px" }}
              >
                Lorem ipsum dolor sit amet.
              </Text>
            </Box>
          </Flex>
          <Flex
            bgImage={format6}
            bgPosition="center"
            bgSize="cover"
            height="500px"
            color="#fff"
            padding="30px 40px"
            align="end"
          >
            <Box width="100%">
              <Divider />
              <Heading
                fontSize={{ sm: "20px", lg: "40px" }}
                fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                marginTop="20px"
                fontWeight="600"
              >
                Personal Training
              </Heading>
              <Text
                marginTop="20px"
                color="#d3c7c7"
                fontSize={{ sm: "17px", lg: "30px" }}
              >
                Lorem ipsum dolor sit amet.
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </motion.div>
    </Box>
  );
};

export default FormatsSection;
