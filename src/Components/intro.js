import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import nishi_resume from "../Nishigandha_gawas_resume.pdf";

export default function Intro() {
  const onButtonClick = () => {
    window.open(nishi_resume);
  };

  return (
    <Flex id="about" h="800px" justifyContent="center" alignItems="center" flexDir="column"  bg="#0c0c0c">

        <Text fontSize="24px">Hello , I am Nishigandha </Text>

        <ReactTyped
          style={{
            fontSize: "48px",
            color: "rgb(59 130 246)",
            fontWeight: "bold",
          }}
          strings={["A passionate Frontend Developer "]}
          typeSpeed={100}
          loop
        />
   

      <Flex>
        <Button
          backgroundColor="#F8FAFC"
          _hover={{ bg: "hsl(210deg 40% 98% / 90%)"}}
          color="#0F172A"
          variant="solid"
          onClick={onButtonClick}
          size={["sm", "md"]}
          fontWeight="normal"
          download="nishi_resume"
          mr={4}
        
        >
          Download CV
        </Button>
        <Button
          backgroundColor="#1E293B" 
          _hover={{ bg: "hsl(217.2deg 32.6% 17.5% / 80%)" }}
          color="white"
          variant="solid"
          onClick={()=>{}}
          size={["sm", "md"]}
          fontWeight="normal"
          download="nishi_resume"
        >
          Contact me
        </Button>
      </Flex>
    </Flex>
  );
}
