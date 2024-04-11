import React from "react";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

import ProgressBar from "@ramonak/react-progress-bar";

export default function ProgressBarCom({title,value}) {
  return (
    <Box>
      <Flex mb={4} justifyContent="space-between">
        <Text fontSize="18px">{title}</Text> <Text fontSize="18px">{value}%</Text>
      </Flex>
      
      <ProgressBar
        completed={value}
        animateOnRender={true}
        initCompletedOnAnimation={10}
        transitionDuration="10s"
        transitionTimingFunction="ease-in-out"
        labelColor="rgb(59 130 246)"
        bgColor="rgb(59 130 246)"
        height="15px"
      />
    </Box>
  );
}
