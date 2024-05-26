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
import SkillBox from "../Components/SkillBox";

export default function Skills() {
  const { colorMode, toggleColorMode } = useColorMode();
  const skillData = [
    {
      title: "icons8-html-logo-144.png",
      value: "HTML5",
    },
    {
      title: "icons8-css-logo-144.png",
      value: "CSS3",
    },
    {
      title: "icons8-javascript-144.png",
      value: "JavaScript",
    },
    {
      title: "icons8-bootstrap-logo-144.png",
      value: "Bootstrap",
    },
    {
      title: "icons8-angularjs-144.png",
      value: "Angularjs",
    },
    {
      title: "icons8-react-200.png",
      value: "React",
    },
    {
      title: "icons8-next.js-144.png",
      value: "Next js",
    },
    {
      title: "icons8-chakra-ui-144.png",
      value: "Chakra UI",
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
          Skills
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
      {skillData.map((item, index) => {
            return (
              // <GridItem w="100%" key={index}>
              //   <ProgressBarCom title={item.title} value={item.value} />
              // </GridItem>
              <SkillBox img={item.title} label={item.value}/>
            );
          })} 
         
        </Grid>
      </Box>
    </Flex>
  );
}
