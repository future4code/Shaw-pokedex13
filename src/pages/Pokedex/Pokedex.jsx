import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import { PokedexContentDiv, PokedexMainDiv } from './styled'

function Pokedex() {
  return (

      <PokedexMainDiv>
        <Header 
        title={"Pokedex"} 
        leftButton={"Pokemons"} 
        rightButtonExists={false}
        rightButton={""}
        />
  
        <PokedexContentDiv>
        
       </PokedexContentDiv>
        
        </PokedexMainDiv>
    )
}

export default Pokedex