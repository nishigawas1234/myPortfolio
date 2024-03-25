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

export default function AboutUs() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      id="about"
      h="800px"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bg={useColorModeValue("gray.100", "#0c0c0c")}
    >
      <Text fontSize="4xl" fontWeight="bold" color={"red"} mb={16} mt={2}>
        About
      </Text>
      <HStack flexDir={{ base: "column", md: "row" }} p={4}>
        <Box w={{ base: "100%", md: "50%" }}>
          <Box
            display="flex"
            justifyContent="center"
            visibility="visible"
            transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
            transition="opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.4s"
            opacity="1"
          >
            {" "}
            <Image
              src="/nishi.jpg"
              maxW="100%"
              display="block"
              h={{ base: "100%", md: "300px" }}
              alt="Image"
              w={{ base: "auto", md: "auto" }}
              borderRadius={{ base: "0", md: "50%" }}
            />
          </Box>{" "}
        </Box>
        <Box w={{ base: "100%", md: "50%" }}>
          <Text
            mb={8}
            mt={{ base: "4", md: "0" }}
            fontSize="2xl"
            fontWeight="bold"
            color={"fff"}
            visibility="visible"
            transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
            transition="opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.4s"
            opacity="1"
          >
            Hello
          </Text>
          <Text
            textAlign="start"
            m="auto"
            w={{ base: "100%", md: "80%" }}
            visibility="visible"
            transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
            transition="opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.4s"
            opacity="1"
          >
            A frontend developer who's passionate about crafting beautiful and
            user-friendly websites. With 2+ years of experience in the field, I
            specialize in using a variety of frontend frameworks such as
            React.js and Next.js to bring designs to life. Whether it's building
            interactive components, optimizing performance, or ensuring
            cross-browser compatibility, I love diving into the world of
            frontend development. I'm always on the lookout for new challenges
            and opportunities to expand my skills. Let's collaborate and create
            something awesome together!
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
}
