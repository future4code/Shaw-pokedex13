import { Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { HomePageMainDiv } from './styled'


function HomePage() {
  return (
    <HomePageMainDiv>
      <p>HomePage</p>
     <Button colorScheme="amarelo" >Pokedex</Button> 
      
      </HomePageMainDiv>
  )
}

export default HomePage