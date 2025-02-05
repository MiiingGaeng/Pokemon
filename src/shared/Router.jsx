import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Dex from '../pages/Dex.jsx';
import PokemonDetail from '../pages/PokemonDetail.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
