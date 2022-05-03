import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import { PokemonPageContentDiv, PokemonPageMainDiv } from './styled'

function PokemonPage() {

  let emPokedex = true; 
  return (
    <PokemonPageMainDiv>
        <Header 
        title={"PokemonPage"} 
        leftButton={"Pokemons"} 
        rightButtonExists={true}
        rightButton={ emPokedex? "Liberar Pokemon": "Capturar Pokemon"}
        />
  
        <PokemonPageContentDiv>
        
       </PokemonPageContentDiv>
        
        </PokemonPageMainDiv>
  )
}

export default PokemonPage