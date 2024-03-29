
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from "./dashboard"
import theme from "./theme"

function App() {
  
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
       
      </Routes>
    </BrowserRouter> 
  
  </ChakraProvider>
    </div>
  );
}

export default App;
