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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ProgressBarCom from "../Components/ProgressBar";

export default function Skills() {
  const { colorMode, toggleColorMode } = useColorMode();
  const skillData = [
    {
      title: "HTML5",
      value: "80",
    },
    {
      title: "CSS",
      value: "80",
    },
    {
      title: "Bootstrap",
      value: "50",
    },
    {
      title: "Chakra ui",
      value: "80",
    },
    {
      title: "React js",
      value: "50",
    },
    {
      title: "Next js",
      value: "70",
    },
    {
      title: "JSON",
      value: "80",
    },
  ];
  return (
    <Flex
      id="Skills"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue("gray.100", "#0c0c0c")}
      pb={12}
      p="60px 20px"
    >
      <Box
        w={{ base: "100%", md: "60%" }}
      >
        <Text fontSize="4xl" fontWeight="bold" color={"red"} mb={16} mt={2}>
          Skils
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          {skillData.map((item, index) => {
            return (
              <GridItem w="100%" key={index}>
                <ProgressBarCom title={item.title} value={item.value} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Flex>
  );
}
