import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./constants/GlobalStyle";
import { ChakraProvider } from '@chakra-ui/provider';
import {theme} from './constants/theme'
import AppRoutes from './services/Routes/AppRoutes'
import "@fontsource/press-start-2p"
import "@fontsource/bangers"
import GlobalState from "./contexts/GlobalContext/GlobalState";



function App() {
  return (
   
    <ChakraProvider theme={theme}>
    <GlobalStyle/>

    <GlobalState>
    <AppRoutes/>
    </GlobalState>
    
    </ChakraProvider>
  
    
  );
}

export default App;
