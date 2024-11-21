import {
  HStack,
  Icon,
  Image,
  Drawer,
  Button,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <HStack marginX="120px" marginY={5} justifyContent="space-between">
        <Image src={logo} />
        <Button variant="unstyled" onClick={onOpen} ref={btnRef}>
          <Icon
            as={FaBars}
            fontSize="30px"
            color="white"
            cursor="pointer"
            _hover={{
              color: "orangered",
            }}
          />
        </Button>
      </HStack>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        blockScrollOnMount
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack mt="50px">
              <Button
                as="a"
                variant="link"
                color="#000"
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
                color="#000"
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
