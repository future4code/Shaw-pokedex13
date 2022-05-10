import styled from "styled-components";
import { COLORS, MYFONTS } from "../../constants/theme";


export const HeaderDiv = styled.div`
background-color: ${COLORS.primary}; 
display: flex; 
align-items: center; 
justify-content: space-between; 
padding: 0% 1.5%; 



h2 {
    font-family:${MYFONTS.title};
    color: ${COLORS.secondary};   
    text-align: center; 
    font-size: 2.8rem;
    stroke: black 2px; 
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;

    @media (max-width: 750px) {
        font-size: 1.8rem; 
    }
}

Button {
    padding: 0% 2%; 
    width: 15%; 
    border-radius: 0px; 
    border: solid black 1px; 
    font-size: 0.9rem; 

    @media (max-width: 750px) {
        width: 25%;
        font-size: 0.6rem; 
    }
}

span {
    width: 25%; 
}

#rightButton {
    font-size: 0.8rem;

    @media (max-width: 750px) {
        font-size: 0.6rem; 
    }
}


`