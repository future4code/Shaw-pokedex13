import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { goToLastPage } from '../../services/Routes/coordinators';
import { PokemonPageContentDiv, PokemonPageMainDiv } from './styled'

function PokemonPage() {
  const navigate = useNavigate(); 

  let emPokedex = true; 
  return (
    <PokemonPageMainDiv>
        <Header 
        title={"PokemonPage"} 
        leftButton={"Voltar"} 
        leftButtonClick = { ()=> goToLastPage(navigate)}
        rightButtonExists={true}
        rightButton={ emPokedex? "Liberar Pokemon": "Capturar Pokemon"}
        />
  
        <PokemonPageContentDiv>
        
       </PokemonPageContentDiv>
        
        </PokemonPageMainDiv>
  )
}

export default PokemonPage