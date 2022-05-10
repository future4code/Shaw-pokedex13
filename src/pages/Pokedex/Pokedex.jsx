import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { goToHomePage } from '../../services/Routes/coordinators';
import { PokedexContentDiv, PokedexMainDiv } from './styled';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalContext';

function Pokedex() {
  const navigate = useNavigate(); 
  const {states, setters, requests} = useContext(GlobalContext); 
  let {pokemonList, pokedex} = states; 


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
        {pokedex.length > 0 && pokedex.map( (pokemon) => {
          return (
           <PokemonCard pokemon = {pokemon} key ={pokemon.id} pokedex = {true}/>
          )
        })}
       </PokedexContentDiv>
        
        </PokedexMainDiv>
    )
}

export default Pokedex