import styled from "styled-components";
import { COLORS, MYFONTS, HEADER } from "../../constants/theme";



export const PokedexMainDiv= styled.div`
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

export const PokedexContentDiv = styled.div`
display: flex; 
flex-direction: row; 
background-color: ${COLORS.background}; // 
flex-wrap: wrap; 
min-height: 100vh;
height: max-content; 
padding-top: 1%; 
padding-bottom: 10%;

@media (max-width: 750px) {
        justify-content: center;  
    }

`