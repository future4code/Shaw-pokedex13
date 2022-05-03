import { Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToPokedex } from '../../services/Routes/coordinators'
import { HomePageContentDiv, HomePageMainDiv } from './styled'


function HomePage() {

  const navigate = useNavigate(); 
  return (
    <HomePageMainDiv>
      <Header 
      title={"Lista de Pokemon"} 
      leftButton={"Pokedex"} 
      leftButtonClick = {() => goToPokedex(navigate)}
      rightButtonExists={false}
      rightButton={""}
      />

      <HomePageContentDiv>
      
     </HomePageContentDiv>
      
      </HomePageMainDiv>
  )
}

export default HomePage