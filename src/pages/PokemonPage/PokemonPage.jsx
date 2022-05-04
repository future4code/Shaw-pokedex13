import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { goToLastPage } from '../../services/Routes/coordinators';
import { PokemonPageContentDiv, PokemonPageMainDiv } from './styled'

function PokemonPage() {
  const navigate = useNavigate(); 


  let {name} = useParams(); 
  const [searchParams, setSearchParams] = useSearchParams(); 
  let pokedexQuery = searchParams.get("pokedex"); 
 let inPokedex = (pokedexQuery === "true" ? true: false)

  return (
    <PokemonPageMainDiv>
        <Header 
        title={name} 
        leftButton={"Voltar"} 
        leftButtonClick = { ()=> goToLastPage(navigate)}
        rightButtonExists={true}
        rightButton={ inPokedex ? "Liberar Pokemon": "Capturar Pokemon"}
        />
  
        <PokemonPageContentDiv>
        
       </PokemonPageContentDiv>
        
        </PokemonPageMainDiv>
  )
}

export default PokemonPage