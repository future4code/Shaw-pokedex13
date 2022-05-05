import styled from "styled-components";
import { COLORS, MYFONTS } from "../../constants/theme";


export const PokemonCardMainDiv = styled.div`
min-height: 40vh; 
height: 40vh;
min-width: 18vw; 
width: 18vw;
display: flex; 
flex-direction: column; 
background-color: #D1D9DE; 
/* border: 2px solid black;  */
box-shadow: 2px 2px 2px; 
margin: 1.5% 3%; 


@media (max-width: 750px) {
        min-height: 40vh; 
        height: 40vh; 
        
        min-width: 35vw; 
        width: 40vw; 
    }


`
//pokemon.sprites.front_default
export const PokemonCardNameDiv = styled.div`
height: 12%; 
display: flex; 
align-items: center; 
justify-content: center; 
background-color: ${COLORS.secondary}; 
font-family: ${MYFONTS.title}; 

border: 2px solid black; 

font-size: 1.4rem; 
/* color: ${COLORS.secondary};  */
`

export const PokemonCardImageDiv = styled.div`
height: 76%; 
width: 100%; 
border-left: 2px solid black; 
border-right: 2px solid black; 

display: flex; 
justify-content: center;
align-items: center; 

img {
    max-height: 85%; 
    max-width: 85%; 
}



`

export const PokemonCardButtonDiv = styled.div`
display: flex; 
width: 100%; 
height: 12%; 
justify-self: flex-end; 
 

/* justify-content: space-between;  */

Button{
    width: 50%; 
    height: 100%; 
    max-height: 100%; 
    font-size: 11px; 
    border-radius: 0px; 
    border: solid black 2px; 
    
}

#leftButton{
    color: #FFFFFF;

    @media (max-width: 750px) {
        font-size: 0.5rem; 
    }
}     

#rightButton {
    color:${COLORS.font.primary};
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
    @media (max-width: 750px) {
        font-size: 0.5rem; 
    }
}

`