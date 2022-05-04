import React, {useState, useEffect, useContext} from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { goToLastPage } from '../../services/Routes/coordinators';
import { PokemonPageContentDiv, PokemonPageMainDiv } from './styled'
import { getPokemonDetail } from '../../services/requests';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalContext'


function PokemonPage() {
  const navigate = useNavigate(); 
  let [pokemon, setPokemon] = useState({})
  const {states, setters, requests} = useContext(GlobalContext); 
  let {setPokemonList, setPokedex} = setters; 
  let [inPokedex, setInPokedex] = useState(false)
  let {name} = useParams(); 
  const [searchParams, setSearchParams] = useSearchParams(); 

  useEffect( ()=> {
  
    getPokemonDetail(`https://pokeapi.co/api/v2/pokemon/${name}`, setPokemon); 
    inPokedex = searchParams.get("pokedex") === "true"
  }, [])




 const grabPokemon = () => {
  //inside pokedex going to wild pokemons
  if(inPokedex) {
  
    setPokemonList([...states.pokemonList, {name: name, url: `https://pokeapi.co/api/v2/pokemon/${name}` }])

    let updatedPokedex = states.pokedex.filter( (poke) => {
      return poke.name !== name
    })

    setPokedex(updatedPokedex)
   setInPokedex(!inPokedex); 
  }

  else {
    //inside wild pokemons going to pokedex
    // add to pokedex, remove from wild pokemons
    setPokedex([...states.pokedex, {name: name, url: `https://pokeapi.co/api/v2/pokemon/${name}` }])

    let updatedWildPokemons = states.pokemonList.filter( (poke) => {
     
      return poke.name !== name
    })

    setPokemonList(updatedWildPokemons);
    setInPokedex(!inPokedex); 
    
  }
}


useEffect( ()=> {
  getPokemonDetail(`https://pokeapi.co/api/v2/pokemon/${name}`, setPokemon); 
 
}, [states.pokemonList, states.pokedex, inPokedex])

  return (
    <PokemonPageMainDiv>
        <Header 
        title={name} 
        leftButton={"Voltar"} 
        leftButtonClick = { ()=> goToLastPage(navigate)}
        rightButtonExists={true}
        rightButton={ inPokedex ? "Liberar Pokemon": "Capturar Pokemon"}
        rightButtonClick = { () => grabPokemon()}
        />
  
        <PokemonPageContentDiv>
        
       </PokemonPageContentDiv>
        
        </PokemonPageMainDiv>
  )
}

export default PokemonPage