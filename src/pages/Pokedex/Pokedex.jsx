import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToHomePage } from '../../services/Routes/coordinators';
import { PokedexContentDiv, PokedexMainDiv } from './styled'

function Pokedex() {
  const navigate = useNavigate(); 
  return (

      <PokedexMainDiv>
        <Header 
        title={"Pokedex"} 
        leftButton={"Pokemons"} 
        leftButtonClick={ () => goToHomePage(navigate)}
        rightButtonExists={false}
        rightButton={""}
        />
  
        <PokedexContentDiv>
        
       </PokedexContentDiv>
        
        </PokedexMainDiv>
    )
}

export default Pokedex