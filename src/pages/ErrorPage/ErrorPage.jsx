import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 
import { goToHomePage } from '../../services/Routes/coordinators';

//Se alguem digitar um URL não existente, redireccionar a home page
function ErrorPage() {
    const navigate = useNavigate(); 

    useEffect( ()=>{
        goToHomePage(navigate)
    },[])


  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage