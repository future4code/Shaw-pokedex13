import styled from "styled-components";
import { COLORS, MYFONTS, HEADER } from "../../constants/theme";



export const PokemonPageMainDiv= styled.div`
display: grid; 
//tamanho fixo para o header, e um fr para preencher o resto
grid-template-rows: ${HEADER.size} 1fr; 
min-height: 100vh;
height: 100vh;  


// mudar depois
p {
    font-family: ${MYFONTS.title};
}

Button {
    font-family: ${MYFONTS.body}; 
    color: #000000;
}


`

export const PokemonPageContentDiv = styled.div`
display: flex; 
flex-direction: column; 
width: 100%; 
height: 100%; 
background-color: ${COLORS.background}; 

align-items: center; 
justify-content: center; 

Button {
    padding: 1.5% 7%; 
    max-width: 12%; 
    font-size: 1.5rem; 
    border-radius: 15px; 
    border: 2px solid black; 

}

`


export const PokemonPageTypesDiv = styled.div`
background-color: ${COLORS.secondary}; 
display: flex; 
align-items: center; 
justify-content: space-between;
font-size: 2rem; 
padding: 0% 3%; 
width: 30%; 
height: 8%; 
border: 2px solid black; 

`

export const PokemonPageInfoDiv = styled.div`
background-color: ${COLORS.primary}; 

margin-top: 2%;
margin-bottom: 1%; 
width: 30%; 
height: 60%; 
border: 2px solid black; 

`