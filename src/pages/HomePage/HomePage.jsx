import { Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToPokedex } from '../../services/Routes/coordinators'
import { HomePageContentDiv, HomePageMainDiv } from './styled'
// import { RequestGetPokemon } from '../../services/requests/RequestGetPokemon'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

function HomePage() {

  const navigate = useNavigate(); 
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    function loadApi(){
      let url = 'https://pokeapi.co/api/v2/pokemon/'
      fetch(url)
      .then((r) => r.json())
      .then((jason) => {
        //console.log(jason)
        setPokemon(jason.results)
      })
    }
    loadApi()
  } , [])

  console.log(pokemon)

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
      {pokemon.map( (pokemon) => {
          return (
           <PokemonCard pokemon = {pokemon} key = {pokemon.id} pokedex = {false}/>
          )
        })}
     </HomePageContentDiv>
      
      </HomePageMainDiv>
  )
}

export default HomePage