import React from "react";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  useColorMode,
  Image
} from "@chakra-ui/react";



export default function SkillBox({img,label}) {
  console.log(img)
  return (
    <Box m="auto">
       <Image
              src={img}
              w="150px"
              className="image"
              alt="Dan Abramov"
              h="150px"
            />
            <Text>{label}</Text>
    </Box>
  );
}
