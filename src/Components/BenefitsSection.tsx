import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  return (
    <>
      <Box background="#ef7a2e" minHeight="500px">
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Heading
            textAlign="center"
            fontSize="80px"
            color="#fff"
            paddingTop="20px"
            fontWeight="600"
            fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
          >
            Benefits of sport training
          </Heading>
        </motion.div>
        <SimpleGrid
          spacing={5}
          columns={{ sm: 1, md: 2, lg: 4 }}
          padding="70px"
        >
          <motion.div
            whileInView={{ rotateX: 360, opacity: 1 }}
            initial={{ rotateX: 180, opacity: 0 }}
            style={{ perspective: "1000" }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <Card
              align="center"
              flexBasis="20%"
              minHeight="400px"
              borderRadius={0}
            >
              <CardHeader>
                <Heading
                  fontWeight="600"
                  fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                >
                  Agility
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="20px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, illum consectetur? Sunt, facere? Consequuntur ab unde
                  ea, similique saepe iure expedita magnam eius, ullam nobis sed
                  consectetur voluptatem corporis sequi. Obcaecati velit
                  doloribus dolorem minima cupiditate, commodi accusantium
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  textTransform="uppercase"
                  fontWeight="600"
                  fontSize="20px"
                >
                  More
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            whileInView={{ rotateX: 360, opacity: 1 }}
            initial={{ rotateX: 180, opacity: 0 }}
            style={{ perspective: "1000" }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <Card
              align="center"
              flexBasis="20%"
              minHeight="400px"
              borderRadius={0}
            >
              <CardHeader>
                <Heading
                  fontWeight="600"
                  fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                >
                  Strength
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="20px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, illum consectetur? Sunt, facere? Consequuntur ab unde
                  ea, similique saepe iure expedita magnam eius, ullam nobis sed
                  consectetur voluptatem corporis sequi. Obcaecati velit
                  doloribus dolorem minima cupiditate, commodi accusantium
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  textTransform="uppercase"
                  fontWeight="600"
                  fontSize="20px"
                >
                  More
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            whileInView={{ rotateX: 360, opacity: 1 }}
            initial={{ rotateX: 180, opacity: 0 }}
            style={{ perspective: "1000" }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <Card
              align="center"
              flexBasis="20%"
              minHeight="400px"
              borderRadius={0}
            >
              <CardHeader>
                <Heading
                  fontWeight="600"
                  fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                >
                  Quickness
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="20px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, illum consectetur? Sunt, facere? Consequuntur ab unde
                  ea, similique saepe iure expedita magnam eius, ullam nobis sed
                  consectetur voluptatem corporis sequi. Obcaecati velit
                  doloribus dolorem minima cupiditate, commodi accusantium
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  textTransform="uppercase"
                  fontWeight="600"
                  fontSize="20px"
                >
                  More
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
            whileInView={{ rotateX: 360, opacity: 1 }}
            initial={{ rotateX: 180, opacity: 0 }}
            style={{ perspective: "1000" }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <Card
              align="center"
              flexBasis="20%"
              minHeight="400px"
              borderRadius={0}
            >
              <CardHeader>
                <Heading
                  fontWeight="600"
                  fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                >
                  Power
                </Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize="20px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, illum consectetur? Sunt, facere? Consequuntur ab unde
                  ea, similique saepe iure expedita magnam eius, ullam nobis sed
                  consectetur voluptatem corporis sequi. Obcaecati velit
                  doloribus dolorem minima cupiditate, commodi accusantium
                </Text>
              </CardBody>
              <CardFooter>
                <Link
                  textTransform="uppercase"
                  fontWeight="600"
                  fontSize="20px"
                >
                  More
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default BenefitsSection;
