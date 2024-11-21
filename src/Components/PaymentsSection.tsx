import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import payment1 from "../assets/payment1.webp";
import payment2 from "../assets/payment2.webp";
import payment3 from "../assets/payment3.webp";
import payment4 from "../assets/payment4.webp";
import arrow from "../assets/arrow.webp";
import { motion } from "framer-motion";
import { useRef } from "react";

const PaymentsSection = () => {
  const scrollRef = useRef(null);
  return (
    <Box
      background="#ef7a2e"
      minHeight="500px"
      ref={scrollRef}
      style={{ overflow: "hidden" }}
    >
      <motion.div
        whileInView={{ x: 0 }}
        initial={{ x: "100px" }}
        transition={{ duration: 1.5 }}
        viewport={{ root: scrollRef }}
      >
        <Heading
          textAlign="center"
          fontSize={{ sm: "40px", lg: "70px" }}
          color="#fff"
          paddingTop="20px"
          fontWeight="600"
          fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        >
          Join now for just $10/month
        </Heading>
      </motion.div>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: "400px", opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <SimpleGrid
          spacing={5}
          columns={{ sm: 1, md: 2, lg: 4 }}
          padding="70px"
          fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        >
          <Card maxW="sm" borderRadius="0">
            <CardBody padding="0">
              <Image src={payment1} />
              <Stack mt="6" spacing="3" textAlign="center" padding="15px">
                <Heading
                  fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                  size="xl"
                >
                  Unlimited Fitness
                </Heading>
                <Text color="#645e5e" fontSize="25px">
                  Sample text.Click to select the text box. Click again or
                  double click to start editing the text
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Image src={arrow} boxSize="50px" margin="0 auto" />
            </CardFooter>
          </Card>
          <Card maxW="sm" borderRadius="0">
            <CardBody padding="0">
              <Image src={payment2} />
              <Stack mt="6" spacing="3" textAlign="center" padding="15px">
                <Heading
                  fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                  size="xl"
                >
                  Personal Training
                </Heading>
                <Text color="#645e5e" fontSize="25px">
                  Sample text.Click to select the text box. Click again or
                  double click to start editing the text
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Image src={arrow} boxSize="50px" margin="0 auto" />
            </CardFooter>
          </Card>
          <Card maxW="sm" borderRadius="0">
            <CardBody padding="0">
              <Image src={payment3} />
              <Stack mt="6" spacing="3" textAlign="center" padding="15px">
                <Heading
                  fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                  size="xl"
                >
                  Massage Therapy
                </Heading>
                <Text color="#645e5e" fontSize="25px">
                  Sample text.Click to select the text box. Click again or
                  double click to start editing the text
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Image src={arrow} boxSize="50px" margin="0 auto" />
            </CardFooter>
          </Card>
          <Card maxW="sm" borderRadius="0">
            <CardBody padding="0">
              <Image src={payment4} />
              <Stack mt="6" spacing="3" textAlign="center" padding="15px">
                <Heading
                  fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                  size="xl"
                >
                  Quick World
                </Heading>
                <Text color="#645e5e" fontSize="25px">
                  Sample text.Click to select the text box. Click again or
                  double click to start editing the text
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Image src={arrow} boxSize="50px" margin="0 auto" />
            </CardFooter>
          </Card>
        </SimpleGrid>
      </motion.div>
    </Box>
  );
};

export default PaymentsSection;
