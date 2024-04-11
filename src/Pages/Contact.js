import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  HStack,
  VStack,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  Image,
} from "@chakra-ui/react";
import ContactForm from "../Components/ContactForm"

export default function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
    id="Contact"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue("gray.100", "#0c0c0c")}
      pb={12}
      p="60px 0"
    >
       <Box p={8} borderRadius="lg"  boxShadow="lg" w={{ base: "100%", md: "40%" }}>
        <Text fontSize="4xl" fontWeight="bold" color={"red"} mb={16} mt={2}>
          Contact Me
        </Text>
        <ContactForm/>
      </Box>
     
    </Flex>
  );
}
