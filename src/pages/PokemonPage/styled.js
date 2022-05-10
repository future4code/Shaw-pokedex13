import styled from "styled-components";
import { COLORS, MYFONTS, HEADER } from "../../constants/theme";



export const PokemonPageMainDiv= styled.div`
display: grid; 
//tamanho fixo para o header, e um fr para preencher o resto
grid-template-rows: ${HEADER.size} 1fr; 
min-height: 100vh;
height: 100vh;  



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


    @media (max-width: 750px) {
        font-size: 1.4rem;  
        max-width: 50%; 
        padding: 5% 7%;
    }

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

@media (max-width: 750px) {
        width: 60%;  
        font-size: 1.5rem; 
        margin-top: -20%; 
    }


`

export const PokemonPageInfoDiv = styled.div`
background-color: ${COLORS.primary}; 
display: flex; 
flex-direction: column; 
color: ${COLORS.secondary}; 
align-items: center; 
justify-content: space-evenly; 
margin-top: 2%;
margin-bottom: 1%; 
width: 30%; 
height: 60%; 
border: 2px solid black; 


h2{
    font-family: ${MYFONTS.title}; 
    font-size: 2.4rem; 
    margin-top: -2%; 
    text-decoration: underline;  
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;

    @media (max-width: 750px) {
        font-size: 2rem;  
    }
}

p {
    font-size: 1.8rem; 
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;

    @media (max-width: 750px) {
        font-size: 1.5rem;  
    }
}


@media (max-width: 750px) {
        width: 60%;  
        margin-bottom: 1rem; 
    }

`


export const PokemonPageAtaqueDiv = styled.div`
background-color: ${COLORS.primary}; 
display: flex; 
flex-direction: column; 
color: ${COLORS.secondary}; 
align-items: center; 
justify-content: flex-start; 
margin-top: 2%;
margin-bottom: 1%; 
width: 30%; 
height: 60%; 
border: 2px solid black; 


h2{
    font-family: ${MYFONTS.title}; 
    font-size: 2.4rem; 
    margin-top: 3%; 
    margin-bottom: 6%; 
    text-decoration: underline;  
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;

    @media (max-width: 750px) {
        font-size: 2rem;  
    }
}

p {
    font-size: 1.8rem; 
    margin-bottom: 2%; 
    padding-right: 2%; 
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;

    @media (max-width: 750px) {
        font-size: 1.5rem;  
    }
}


@media (max-width: 750px) {
        width: 60%;  
        margin-bottom: 1rem; 
    }

`


export const PokemonPageImagemDiv = styled.div`
/* background-color: ${COLORS.primary};  */
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: center; 
margin-top: 2%;
margin-bottom: 1%; 
width: 30%; 
height: 60%; 
/* border: 2px solid black;  */

@media (max-width: 750px) {
    width: clamp(30%, 30% + 50%, 90%);
    }

img {
    width: 90%; 
    height: 90%; 

    @media (max-width: 750px) {
        width: 100%;  
        height: 100%; 
        margin-bottom: 10%;
    }
}


`