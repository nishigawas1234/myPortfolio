import { Box, Flex, Grid, GridItem, Text, useToast,  useColorModeValue, } from "@chakra-ui/react";
import React from "react";
import Linkedin from "./Icons/Linkedin";
import GitHub from "./Icons/GitHub";
import Email from "./Icons/Email";
import Call from "./Icons/Call";

export default function Footer() {
  const toast = useToast();
  const CopyPhone = () => {
    navigator.clipboard.writeText("8108307952");

    toast({
      title: "Contact number copied",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Flex
    bg={useColorModeValue("#d9e6f3", "#14191b")}
      // bg="#14191b"
      py={30}
      id="Social"
      justifyContent="center"
      alignItems="center"
      flexDir = "column"
      h="auto"
    >
      <Text fontSize="4xl" fontWeight="bold" color={useColorModeValue("black", "#ff")} mb={16} mt={2}>
        Nishigandha
      </Text>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        w="40%"
        m="auto"
      >
        <GridItem w="100%">
          <a
            href="https://www.linkedin.com/in/nishigandha-gawas-868935203/"
            target="_blank"
          >
            <Linkedin m="auto" w="40px" h="auto" color={useColorModeValue("black", "#ff")}/>
          </a>
        </GridItem>
        <GridItem w="100%">
          <a href="https://github.com/nishigawas1234" target="_blank">
            <GitHub m="auto" w="40px" h="auto" color={useColorModeValue("black", "#ff")}/>
          </a>
        </GridItem>
        <GridItem w="100%">
          <a href="mailto:gawasnishigandha@gmail.com" target="_blank">
            <Email m="auto" w="40px" h="auto"color={useColorModeValue("black", "#ff")}/>
          </a>
        </GridItem>
        <GridItem w="100%">
          <Call m="auto" w="40px" h="auto" onClick={CopyPhone} color={useColorModeValue("black", "#ff")}/>
        </GridItem>
      </Grid>
    </Flex>
  );
}
