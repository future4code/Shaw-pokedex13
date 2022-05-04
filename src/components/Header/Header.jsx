import { Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { HeaderDiv } from './styled'


function Header(props) {

//vai receber por props, titulo da pagina, nome botao esquerdo, nome botao
//direito, e se botao direito vai aparecer

//titulo = props.title
//leftButton = props.leftButton
// rightButtonExists = props.rightButtonExists (true || false)
// rightButton = props.rightButton


  return (
    <HeaderDiv>
      <Button colorScheme="amarelo" onClick={()=> props.leftButtonClick()}>{props.leftButton}</Button>
      <h2>{props.title}</h2>
      {props.rightButtonExists ? <Button id= "rightButton" colorScheme = "amarelo">{props.rightButton}</Button>: <span></span>}
      </HeaderDiv>


  )
}

export default Header