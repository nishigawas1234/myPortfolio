import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import nishi_resume from "../Nishigandha_gawas_resume.pdf";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Intro() {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode, "colorMode");
  const onButtonClick = () => {
    window.open(nishi_resume);
  };

  const containerRef = useRef(null),
    [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = useCallback(
      (container) => {
        containerRef.current = container;

        window.particlesContainer = container;
      },
      [containerRef],
    ),
    options = useMemo(
      () => ({
        fullScreen: {
          zIndex: -1,
        },
        particles: {
          number: {
            value: 70,
          },
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
        },
        themes: [
          {
            name: "dark",
            default: {
              value: true,
              auto: true,
              mode: "dark",
            },
            options: {
              background: {
                color: true ?  "#000000" : "#fff",
              },
              particles: {
                color: {
                  value: true ? "#ffffff" : "#000",
                },
                links: {
                  color: true ? "#ffffff" : "#000" ,
                },
              },
            },
          },
        ],
      }),
      [],
    ),
    lightTheme = () => {
      console.log(containerRef.current ,"---")
      containerRef.current?.loadTheme("light");
    },
    darkTheme = () => {
      console.log("-dd--")
      containerRef.current?.loadTheme("dark");
    };
  useEffect(() => {
    if (colorMode == "light") {
      console.log("light")
      lightTheme();
    } else {
      darkTheme();
    }
  }, [colorMode]);

  return (
    <Flex
      id="intro"
      h="700px"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bg={useColorModeValue("gray.100", "#0c0c0c")}
    >
      {/* {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )} */}
      <Text fontSize="24px" zIndex={10}>
        Hello , I am Nishigandha{" "}
      </Text>

      <ReactTyped
        zIndex={10}
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
          _hover={{ bg: "hsl(210deg 40% 98% / 90%)" }}
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
          onClick={() => {}}
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
