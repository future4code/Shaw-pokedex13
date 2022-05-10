import React, {useState, useEffect, useContext} from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { goToLastPage } from '../../services/Routes/coordinators';
import { PokemonPageAtaqueDiv, PokemonPageContentDiv, PokemonPageImagemDiv, PokemonPageInfoDiv, PokemonPageMainDiv, PokemonPageTypesDiv } from './styled'
import { getPokemonDetail } from '../../services/requests';
import { GlobalContext } from '../../contexts/GlobalContext/GlobalContext'
import { Button } from '@chakra-ui/react';


function PokemonPage() {
  const navigate = useNavigate(); 
  let [pokemon, setPokemon] = useState({}) 
  let [showFrontPicture, setShowFrontPicture] = useState(true)
  let [displayInfoCount, setDisplayInfoCount] = useState(1); 


  const {states, setters, requests} = useContext(GlobalContext); 
  let {setPokemonList, setPokedex} = setters; 
  let [inPokedex, setInPokedex] = useState(false)


 // como url da pagina de detalhe eh path="/pokemon/:name", o Router sabe que :name eh uma variavel, e podemos usa-lo no nosso codigo
 // em este caso :name eh o nosso param, a gente bota o nome do pokemon que a gente quer ver o detalhe
 // que eh chamado no arquivo coordinators.js, como o nome do pokemon

  let {name} = useParams(); // pegando nome do pokemon, do url, para usar no API


  //search param tem nome e valor
  //no nosso caso para saber se vem do pokedex ou da lista de pokemon, para mostrar o botao (capturar/liberar) corretamente
  const [searchParams, setSearchParams] = useSearchParams(); 




//primeira montagem, pegar dados do pokemon da API usando o nome que foi passado na URL
  useEffect( ()=> {
  
    //pegando detalhes do pokemon da API pelo nome na url
    
    //vamos mandar o url para uma funcao que vai fazer o GET no API, e vamos passar  a funcao que vai guardar o valor do API na variavel pokemon DESTA pagina
    getPokemonDetail(`https://pokeapi.co/api/v2/pokemon/${name}`, setPokemon); 

    //para os botoes de capturar/liberar

    let myPokedex = searchParams.get("pokedex") === "true"; 
    setInPokedex(myPokedex)
  }, [])

//PAGINA DO CHARIZARD

//funcao ela joga pokemon da lista para o pokedex OU do pokedex para a lista (CAPTURAR OU LIBERAR)
 const grabPokemon = () => {

  //PROCESSO DE LIBERAR POKEMON DO POKEDEX::::    POKEDEX -> LISTA DE POKEMON
  if(inPokedex) { // SE BOOLEAN inPokedex for true, pokemon esta dentro do pokedex e tem que ir para a lista de pokemon
  
    //Spread para copiar os valores que ja estao dentro e virgula para ADICIONAR este pokemon para a lista
    //ja joga o charizard para a lista de pokemon selvagem
    setPokemonList([...states.pokemonList, {name: name, url: `https://pokeapi.co/api/v2/pokemon/${name}` }])


    //TEM QUE TIRAR DO POKEDEX
    //filtrar de pokedex, que ele retorne nesta lista TODOS os pokemons que NAO tenham o nome de CHARIZARD volte


    // charizard, charmander, bulbasaur, ivysaur

    //filtrar o que seleccionei para desaparecer
    //charizard nao vai estar mais
    let updatedPokedex = states.pokedex.filter( (poke) => {
      return poke.name !== name //(CHARIZARD)
    })

    setPokedex(updatedPokedex) //atualizar pokedex


    setInPokedex(!inPokedex); //avisar que saiu do pokedex
  }

  //MESMA COISA SENTIDO CONTRARIO
  //PROCESSO DE CAPTURAR POKEMON PARA O POKEDEX::::    LISTA DE POKEMON -> POKEDEX
  else 
  {
    //inside wild pokemons going to pokedex
    // add to pokedex, remove from wild pokemons
    setPokedex([...states.pokedex, {name: name, url: `https://pokeapi.co/api/v2/pokemon/${name}` }])

    let updatedWildPokemons = states.pokemonList.filter( (poke) => {
     
      return poke.name !== name
    })

    setPokemonList(updatedWildPokemons); //atualiza a lista
    setInPokedex(!inPokedex); //avisa que esta no pokedex
    
  }
}

//quando eu tirar ou adicionar pokemon do pokedex, atualizar pagina
useEffect( ()=> {
  getPokemonDetail(`https://pokeapi.co/api/v2/pokemon/${name}`, setPokemon); 
 
}, [states.pokemonList, states.pokedex, inPokedex])



let displayInfo = () => {

  if (displayInfoCount === 3)
  {
    setDisplayInfoCount(1)
  }

  else {
    setDisplayInfoCount(displayInfoCount + 1)
  }
  
}

let buttonText; 
// console.log(pokemon.sprites && pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default)
//variavel que vai decidir o que mostrar
let displayInfoCard; 

switch (displayInfoCount) {
  case 1: 
    buttonText = "STATS"
    //logica de mostrar foto
    displayInfoCard = (
      <PokemonPageImagemDiv>
        {pokemon.sprites 
        && pokemon.sprites.versions
         && pokemon.sprites.versions['generation-v'] 
         && pokemon.sprites.versions['generation-v']
         && <img alt={name} src={ showFrontPicture ? (pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default) : (pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default) }/> }
      </PokemonPageImagemDiv>
    )
    break; 

  case 2: 
  buttonText = "Ataques"
  //logica de mostrar stats

  displayInfoCard = (
    <PokemonPageInfoDiv>
      <h2>STATS</h2>
      { pokemon.stats && pokemon.stats.map( (stat) => {
        return (<p>{`${stat.stat.name}: `} {stat.base_stat}</p>)
      })}
    </PokemonPageInfoDiv>
  )
  break; 

  case 3: buttonText = "Foto"
  //logica de mostrar ataques

  displayInfoCard = (
   
      <PokemonPageAtaqueDiv>
      <h2>ATAQUES</h2>
      { pokemon.abilities && pokemon.abilities.map( (ataque) => {
        return (<p>{`- ${ataque.ability.name}`}</p>)
      })}
    </PokemonPageAtaqueDiv>
   
  )
  break; 

  default: 
  buttonText = "STATS"

  displayInfoCard = (
    <PokemonPageInfoDiv>

    </PokemonPageInfoDiv>
  )
}

setTimeout(()=> {
  setShowFrontPicture(!showFrontPicture)
}, 4000)
  return (
    <PokemonPageMainDiv>
        <Header 
        title={name} 
        leftButton={"Voltar"} 
        leftButtonClick = { ()=> goToLastPage(navigate)}
        rightButtonExists={true}
        rightButton={ inPokedex ? "Liberar": "Capturar"}
        rightButtonClick = { () => grabPokemon()}
        />
  
        <PokemonPageContentDiv>

          <PokemonPageTypesDiv>
            <p>{pokemon.types && pokemon.types[0].type.name}</p>
            {pokemon.types &&  (pokemon.types.length > 1? <p>{pokemon.types[1].type.name }</p>: null) }
          </PokemonPageTypesDiv>



          {displayInfoCard}




          <Button colorScheme="amarelo" onClick= {() => displayInfo()}>{buttonText}</Button>
        





       </PokemonPageContentDiv>
        
        </PokemonPageMainDiv>
  )
}

export default PokemonPage