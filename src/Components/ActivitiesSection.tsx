import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  HStack,
} from "@chakra-ui/react";
import Activities1 from "../assets/activities1.webp";
import Activities2 from "../assets/activities2.webp";
import Activities3 from "../assets/activities3.webp";
import Activities4 from "../assets/activities4.webp";
import Activities5 from "../assets/activities5.webp";
import { motion } from "framer-motion";

const ActivitiesSection = () => {
  return (
    <Box>
      <motion.div
        whileInView={{ rotateX: 360, opacity: 1 }}
        initial={{ rotateX: 180, opacity: 0 }}
        style={{ perspective: "1000" }}
        transition={{ duration: 1.5 }}
      >
        <Heading
          textAlign="center"
          fontSize={{ md: "50px", lg: "80px" }}
          margin="0 15%"
          paddingTop="80px"
          fontWeight="800"
          fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        >
          We've got activities for every passion
        </Heading>
      </motion.div>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} padding="30px" pos="relative">
        <Box padding="20px">
          <Text fontSize="20px" marginY="30px" color="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque,
            adipisci voluptates maxime quae minus accusamus, consequatur
            nesciunt doloribus excepturi aut ab quis ullam eos, nihil
            exercitationem dignissimos tempore. Molestias consectetur ab maiores
            quasi laudantium eius dolore repellat possimus asperiores cupiditate
            eum quo tempora modi, consequatur nostrum obcaecati incidunt nemo?
          </Text>
          <motion.div
            whileInView={{
              opacity: 1,
              rotateZ: "360deg",
              x: 0,
              transition: { duration: 1.5, delay: 0.5 },
            }}
            initial={{ opacity: 0, x: -200, rotateZ: 0 }}
          >
            <Image src={Activities1} />
          </motion.div>
        </Box>
        <Box padding="20px">
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Image src={Activities2} />
          </motion.div>
        </Box>
        <SimpleGrid
          pos={{ sm: "static", lg: "absolute" }}
          right={{ sm: "0", lg: "30px" }}
          bottom={{ sm: "0", lg: "-100px" }}
          spacing={10}
          columns={{ sm: 1, lg: 3 }}
          padding="20px"
        >
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "400px", opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Image
              src={Activities3}
              boxSize={{ sm: "100%", lg: "300px" }}
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "400px", opacity: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <Image
              src={Activities4}
              boxSize={{ sm: "100%", lg: "300px" }}
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "400px", opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <Image
              src={Activities5}
              boxSize={{ sm: "100%", lg: "300px" }}
              objectFit="cover"
            />
          </motion.div>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default ActivitiesSection;
