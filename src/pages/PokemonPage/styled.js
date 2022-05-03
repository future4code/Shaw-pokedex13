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
background-color: ${COLORS.background}; 

`