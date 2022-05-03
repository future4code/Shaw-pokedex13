import { Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import { HomePageContentDiv, HomePageMainDiv } from './styled'


function HomePage() {
  return (
    <HomePageMainDiv>
      <Header 
      title={"Lista de Pokemon"} 
      leftButton={"Pokedex"} 
      rightButtonExists={false}
      rightButton={""}
      />

      <HomePageContentDiv>
      
     </HomePageContentDiv>
      
      </HomePageMainDiv>
  )
}

export default HomePage