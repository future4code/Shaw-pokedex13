import { Button } from '@chakra-ui/react'
import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToPokedex } from '../../services/Routes/coordinators'
import { HomePageContentDiv, HomePageMainDiv } from './styled'
// import { RequestGetPokemon } from '../../services/requests/RequestGetPokemon'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext/GlobalContext'

function HomePage() {

  const navigate = useNavigate(); 
  const {states, setters, requests} = useContext(GlobalContext); 

  let {pokemonList, pokedex} = states; 



  return (
    <HomePageMainDiv>
      <Header 
      title={"Wild Pokemons"} 
      leftButton={"Pokedex"} 
      leftButtonClick = {() => goToPokedex(navigate)}
      rightButtonExists={false}
      rightButton={""}
      />

      <HomePageContentDiv>
      {pokemonList.length>0 && pokemonList.map( (pokemon) => {
          return (
           <PokemonCard pokemon = {pokemon} key = {pokemon.id} pokedex = {false}/>
          )
        })}
     </HomePageContentDiv>
      
      </HomePageMainDiv>
  )
}

export default HomePage