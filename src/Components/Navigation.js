import {useState} from 'react';
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Show,
    HStack,
    Text,
    useDisclosure,
    IconButton,
    Hide,
  } from "@chakra-ui/react";
  import {
    MoonIcon,
    SunIcon,
    HamburgerIcon,
    CloseIcon,
    AddIcon,
  } from "@chakra-ui/icons";
  import "../Navbar.css";
  import nishi_resume from "../Nishigandha-resume.pdf";
  
  export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeTab, setActiveTab] = useState('About')
 
  
    const onButtonClick = () => {
      window.open(nishi_resume);
    };
  
    return (
      <div id="navFix" >
        <Box
          bg={useColorModeValue("gray.100", "blackAlpha.900")}
          px={9}
          width={["100%"]}
          borderBottom="1px solid" borderColor={useColorModeValue("#EDF2F7", "#242424")}
         
         backdropFilter="blur(5px)"
          
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack w="42%">
              {/* <Name /> */}
  
              <Show breakpoint="(min-width: 1000px)">
                {" "}
                {/* <Photo /> */}
              </Show>
            </HStack>
  
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              {/* <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              /> */}

              <HStack spacing={8} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  id="myDIV"
                >
                  <Button className="btnRes hover-underline-animation"  variant="ghost" onClick={()=>{setActiveTab('About')}}>
                    <a href="#">
                      {" "}
                      <Text color={activeTab === "About" ? "red" : colorMode == "dark" ? "white" : "black"}  fontWeight="bold">About</Text>
                    </a>
                  </Button>
                  <Button className="btnRes hover-underline-animation" variant="ghost" onClick={()=>{setActiveTab('Skills')}}> 
                    <a href="#Skills">
                      <Text color={activeTab === "Skills" ? "red" : colorMode == "dark" ? "white" : "black"} fontWeight="bold">Skills</Text>
                    </a>
                  </Button>
                  <Button className="btnRes hover-underline-animation" variant="ghost" onClick={()=>{setActiveTab('Projects')}}>
                    <a href="#Projects">
                      <Text color={activeTab === "Projects" ? "red" : colorMode == "dark" ? "white" : "black"} fontWeight="bold">Projects</Text>
                    </a>
                  </Button>
  
                  <Button className="btnRes hover-underline-animation" variant="ghost" onClick={()=>{setActiveTab('Contact')}}> 
                    <a href="#Contact">
                      <Text color={activeTab === "Contact" ? "red" : colorMode == "dark" ? "white" : "black"}>Contact Me</Text>
                    </a>
                  </Button>
                  <Button className="btnRes hover-underline-animation" variant="ghost" onClick={()=>{setActiveTab('Social')}}>
                    <a href="#Social">
                      <Text color={activeTab === "Social" ? "red" : colorMode == "dark" ? "white" : "black"}>Social</Text>
                    </a>
                  </Button>
                </HStack>
              </HStack>
            </Flex>
  
            {/* {isOpen ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  <Button>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button>
                    <a href="#About">
                      <b>About</b>
                    </a>
                  </Button>
  
                  <Button>
                    <a href="#Skills">
                      {" "}
                      <b>Skills</b>
                    </a>
                  </Button>
  
                  <Button>
                    <a href="#Projects">
                      <b>Projects</b>
                    </a>
                  </Button>
  
                  <Button>
                    <a href="#Contact">
                      <b>Contact</b>
                    </a>
                  </Button>
                </Stack>
              </Box>
            ) : null} */}
  
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                <Button
                  backgroundColor="rgb(59 130 246)"
                  _hover={{ bg: "#a891b7", color: "black" }}
                  color="white"
                  variant="solid"
                  onClick={onButtonClick}
                  size={["sm", "md"]}
                  download="nishi_resume"
                  id="resumeBtn"
                >
                  <a
                    href={nishi_resume}
                    target="_blank"
                    download="nishi_resume"
                  >
                    RESUME
                  </a>
                  {/* <Link
                      id="navRes"
                      href={Shubham_Verma_Resume}
                      target="_blank"
                      style={{ textDecoration: "none", color: "white" }}
                      download="Shubham_Verma_Resume"
                    >
                      RESUME
                    </Link> */}
                </Button>
              </Stack>
            </Flex>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            {isOpen ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button  onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}>
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Home">
                      {" "}
                      <b>Home</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#About">
                      <b>About</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Skills">
                      {" "}
                      <b>Skills</b>
                    </a>
                  </Button>

  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Projects">
                      <b>Projects</b>
                    </a>
                  </Button>
  
                  <Button
                    onClick={isOpen ? onClose : onOpen}
                    _hover={{
                      textShadow: "#FC0 1px 0 10px",
                      transform: "scale(1.2)",
                    }}
                  >
                    <a href="#Contact">
                      <b>Contact</b>
                    </a>
                  </Button>
                </Stack>
              </Box>
            ) : null}
          </Flex>
        </Box>
      </div>
    );
  }
