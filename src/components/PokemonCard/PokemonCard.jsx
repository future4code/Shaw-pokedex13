import { Button } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import { getPokemonDetail } from '../../services/requests';
import { PokemonCardButtonDiv, PokemonCardImageDiv, PokemonCardMainDiv, PokemonCardNameDiv } from './styled';

//receive props entire pokemon



function PokemonCard(props) {
  let [pokemon, setPokemon] = useState({})
  let {name, url} = props.pokemon; 

 
  useEffect( ()=> {
  
    getPokemonDetail(url, setPokemon); 
  }, [])



  return (
    <PokemonCardMainDiv>
 
      <PokemonCardNameDiv>
        {name}
        </PokemonCardNameDiv>
        
      <PokemonCardImageDiv>
         { pokemon.sprites ? (<img alt={pokemon.name} src={pokemon.sprites.front_default}/>) : (<Button isLoading={true} variant="ghost"></Button>) }
      </PokemonCardImageDiv>


      <PokemonCardButtonDiv>
        <Button colorScheme="amarelo" id='leftButton'>{props.pokedex ? "Liberar" :"Capturar"}</Button>
        <Button colorScheme="vermelho" id='rightButton'>Detalhes</Button>
      </PokemonCardButtonDiv>
     
      </PokemonCardMainDiv>
  )
}

export default PokemonCard