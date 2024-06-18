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
  Link
} from "@chakra-ui/react";
import ProgressBarCom from "../Components/ProgressBar";

export default function Projects() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      id="Projects"
      h="100vh"
    //   p="60px 0"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue("gray.100", "#1a1a1a")}
      pb={12}
      px={4}
    >
      <Box w={{ base: "100%", md: "60%" }}>
        <Text fontSize="4xl" fontWeight="bold" color={"red"} mb={16}>
          Projects
        </Text>
        <Grid  templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }} gap={4}>
          <GridItem  colSpan={{ base: 1, md: 3}} bg="tomato">
          <Link href="https://memo-mind-rm97.vercel.app/">
            <Box className="container"  w="100%" _hover={{background:"rgb(59 130 246)"}}>
            <Image
              src="memoMind.png"
              w="100%"
              className="image"
              alt="Dan Abramov"
              h="300px"
            />
            <Box className="middle">
              <Text className="text" fontSize="24px" fontWeight="bold">Memo Mind</Text>
            </Box>
            </Box>
            </Link>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2}} bg="papayawhip">
            <Link href="https://my-portfolio-vts8.vercel.app/">
          <Box className="container"  w="100%" _hover={{background:"rgb(59 130 246)"}}>
            <Image
              src="portfolio.png"
              w="100%"
              className="image"
              alt="Dan Abramov"
              h="300px"
            />
            <Box className="middle">
              <Text className="text" fontSize="24px" fontWeight="bold">Portfolio</Text>
            </Box>
            </Box>
            </Link>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 3}} bg="papayawhip">
            <Link href="https://ems-ivory.vercel.app/">
          <Box className="container"  w="100%" _hover={{background:"rgb(59 130 246)"}}>
            <Image
              src="ems.png"
              w="100%"
              className="image"
              alt="Dan Abramov"
              h="300px"
            />
            <Box className="middle">
              <Text className="text" fontSize="24px" fontWeight="bold">EMS</Text>
            </Box>
            </Box>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}
