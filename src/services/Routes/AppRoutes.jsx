import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from '../../pages/HomePage/HomePage';
import Pokedex from '../../pages/Pokedex/Pokedex';
import PokemonPage from '../../pages/PokemonPage/PokemonPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';



function AppRoutes() {

  return (
    <BrowserRouter>

    <Routes>
      <Route index path="/" element = {<HomePage/>} />
      <Route path="/pokedex" element= {<Pokedex/>} />
      <Route path="/pokemon/:name" element= {<PokemonPage/>} />
      <Route path= "*" element= {<ErrorPage/>} />
      

    </Routes>

  </BrowserRouter>
  )
}

export default AppRoutes