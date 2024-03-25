import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  useColorModeValue
} from "@chakra-ui/react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toast = useToast();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Example: Show a toast notification
    toast({
      title: "Form submitted",
      description: "Your message has been sent.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // You can send formData to your backend or perform any other action
  };

  return (
   
      
        <form onSubmit={handleSubmit} >
          <FormControl id="name" mb={4}>
            <FormLabel>Name:</FormLabel>
            <Input
            // bg={useColorModeValue("white", "gray.800")}
            border="1.5px solid #14191b"
            bg="white"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email:</FormLabel>
            <Input
            // bg={useColorModeValue("white", "gray.800")}
            bg="white"
              type="email"
              border="1.5px solid #14191b"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message:</FormLabel>
            <Textarea
            // bg={useColorModeValue("white", "gray.800")}
            bg="white"
            border="1.5px solid #14191b"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="red" color="#fff" bg="#cf1b1b">Submit</Button>
        </form>
  
  );
}
