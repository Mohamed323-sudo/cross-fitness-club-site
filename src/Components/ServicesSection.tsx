import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ServicesBackground from "../assets/services_background.webp";
import personalImg from "../assets/personal.webp";
import exclusive from "../assets/exclusive.webp";
import zumba from "../assets/zumba.webp";
import yoga from "../assets/yoga.webp";
import sauna from "../assets/sauna.webp";
import open24 from "../assets/open24.webp";
import { motion } from "framer-motion";
const ServicesSection = () => {
  return (
    <Box
      minHeight="600px"
      width="100%"
      bgImage={ServicesBackground}
      bgPosition="center"
      bgSize="cover"
      pos="relative"
      fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
      marginTop="150px"
    >
      <SimpleGrid
        width="55%"
        margin="0 auto"
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={5}
        padding="80px 0"
      >
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <VStack
            bgColor="#ef7a2e"
            textAlign="center"
            color="white"
            fontSize="25px"
            padding="40px 20px"
          >
            <Image src={personalImg} boxSize="70px" />
            <Text
              letterSpacing="5px"
              textTransform="uppercase"
              marginTop="20px"
            >
              Personal
            </Text>
          </VStack>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <VStack
            bgColor="#ef7a2e"
            textAlign="center"
            color="white"
            fontSize="25px"
            padding="40px 20px"
          >
            <Image src={exclusive} boxSize="70px" />
            <Text
              letterSpacing="5px"
              textTransform="uppercase"
              marginTop="20px"
            >
              Exclusive
            </Text>
          </VStack>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <VStack
            bgColor="#ef7a2e"
            textAlign="center"
            color="white"
            fontSize="25px"
            padding="40px 20px"
          >
            <Image src={zumba} boxSize="70px" />
            <Text
              letterSpacing="5px"
              textTransform="uppercase"
              marginTop="20px"
            >
              Zumba
            </Text>
          </VStack>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <VStack
            bgColor="#ef7a2e"
            textAlign="center"
            color="white"
            fontSize="25px"
            padding="40px 20px"
          >
            <Image src={yoga} boxSize="70px" />
            <Text
              letterSpacing="5px"
              textTransform="uppercase"
              marginTop="20px"
            >
              Yoga
            </Text>
          </VStack>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <VStack
            bgColor="#ef7a2e"
            textAlign="center"
            color="white"
            fontSize="25px"
            padding="40px 20px"
          >
            <Image src={sauna} boxSize="70px" />
            <Text
              letterSpacing="5px"
              textTransform="uppercase"
              marginTop="20px"
            >
              Sauna
            </Text>
          </VStack>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <VStack
            bgColor="#ef7a2e"
            textAlign="center"
            color="white"
            fontSize="25px"
            padding="40px 20px"
          >
            <Image src={open24} boxSize="70px" />
            <Text
              letterSpacing="5px"
              textTransform="uppercase"
              marginTop="20px"
            >
              open 24 / 7
            </Text>
          </VStack>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
};

export default ServicesSection;
