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
}

Button {
    padding: 0% 2%; 
    width: 15%; 
    border-radius: 0px; 
    border: solid black 1px; 
    font-size: 1rem; 
}

span {
    width: 15%; 
}




`