import { Button } from '@chakra-ui/react';
import React, {useState, useEffect, useContext} from 'react'
import { getPokemonDetail } from '../../services/requests';
import { PokemonCardButtonDiv, PokemonCardImageDiv, PokemonCardMainDiv, PokemonCardNameDiv } from './styled';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalContext'
import { goToPokemonPage } from '../../services/Routes/coordinators';
import { useNavigate } from 'react-router-dom';
//receive props entire pokemon



function PokemonCard(props) {
  const navigate = useNavigate(); 
  let [pokemon, setPokemon] = useState({})
  let {name, url} = props.pokemon; 
  const {states, setters, requests} = useContext(GlobalContext); 
  let {setPokemonList, setPokedex} = setters; 

  useEffect( ()=> {
  
    getPokemonDetail(url, setPokemon); 
  }, [])

  const grabPokemon = () => {
    //inside pokedex going to wild pokemons
    if(props.pokedex) {
    
      setPokemonList([...states.pokemonList, props.pokemon])

      let updatedPokedex = states.pokedex.filter( (poke) => {
        return poke.name !== name
      })

      setPokedex(updatedPokedex)

    }

    else {
      //inside wild pokemons going to pokedex
      // add to pokedex, remove from wild pokemons
      setPokedex([...states.pokedex, props.pokemon])

      let updatedWildPokemons = states.pokemonList.filter( (poke) => {
       
        return poke.name !== name
      })

      setPokemonList(updatedWildPokemons);
      
    }
  }

  useEffect( ()=> {
    getPokemonDetail(url, setPokemon); 
   
  }, [states.pokemonList, states.pokedex])



 const goToPokemonDetailsPage = () => {
   goToPokemonPage(navigate, name, props.pokedex)
 }


//console.log(pokemon.sprites)

  return (
    <PokemonCardMainDiv>
 
      <PokemonCardNameDiv>
        {name}
        </PokemonCardNameDiv>
        
      <PokemonCardImageDiv>
         { pokemon.sprites ? (<img alt={pokemon.name} src={pokemon.sprites.other["official-artwork"].front_default}/>) : (<Button isLoading={true} variant="ghost"></Button>) }
      </PokemonCardImageDiv>


      <PokemonCardButtonDiv>
        <Button colorScheme="amarelo" id='leftButton' onClick ={()=> grabPokemon()}>{props.pokedex ? "Liberar" :"Capturar"}</Button>
        <Button colorScheme="vermelho" id='rightButton' onClick={() => goToPokemonDetailsPage()}>Detalhes</Button>
      </PokemonCardButtonDiv>
     
      </PokemonCardMainDiv>
  )
}

export default PokemonCard