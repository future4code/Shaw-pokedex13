import React, { useState, useEffect} from 'react'
import { GlobalContext } from './GlobalContext';

function GlobalState( {children} ) {

    //lista de pokemon na pagina principal [16] -> adicionar charizard -> [17]
    let [pokemonList, setPokemonList] =  useState([]); 

    //lista de pokemon no pokedex CHARIZARD DAQUI [4] -> tirar charizard -> [3] 
    let [pokedex, setPokedex] = useState([]); 

    function loadApi(){
        let url = 'https://pokeapi.co/api/v2/pokemon/'
        fetch(url)
        .then((r) => r.json())
        .then((jason) => {
          setPokemonList(jason.results)
        })
      }

    useEffect(() => {
        loadApi()
      } , [])

    let states = {pokemonList, pokedex}; 
    let setters = {setPokemonList, setPokedex}; 
    let requests = {loadApi}

  return (
    <GlobalContext.Provider value={   {states, setters, requests}    }>
        {children}
        </GlobalContext.Provider>
  )
}

export default GlobalState;