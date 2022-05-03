import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./constants/GlobalStyle";
import { ChakraProvider } from '@chakra-ui/provider';
import {theme} from './constants/theme'
import AppRoutes from './services/Routes/AppRoutes'
import "@fontsource/press-start-2p"
import "@fontsource/bangers"



function App() {
  return (
   
    <ChakraProvider theme={theme}>
    <GlobalStyle/>
    <AppRoutes/>
    </ChakraProvider>
  
    
  );
}

export default App;
