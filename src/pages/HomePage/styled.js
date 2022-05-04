import styled from "styled-components";
import { COLORS, MYFONTS, HEADER } from "../../constants/theme";




export const HomePageMainDiv= styled.div`
display: grid; 
//tamanho fixo para o header, e um fr para preencher o resto
grid-template-rows: ${HEADER.size} 1fr; 
min-height: 100vh;
height: max-content;  


// mudar depois
p {
    font-family: ${MYFONTS.title};
}

Button {
    font-family: ${MYFONTS.body}; 
    color: #000000;
}


`

export const HomePageContentDiv = styled.div`
display: flex; 
flex-direction: row; 
background-color: ${COLORS.background}; // 
flex-wrap: wrap; 
min-height: 100vh;
height: max-content; 
padding-top: 1%; 

`