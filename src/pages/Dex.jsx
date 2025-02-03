import PokemonList from '../components/PokemonList.jsx';
import DashBoard from '../components/DashBoard';
import styled from 'styled-components';
import MOCK_DATA from '../MOCK_DATA.js';
import { useState } from 'react';

const Dex = () => {
  //state
  const pokemonData = MOCK_DATA;
  const [pokemonList, setPokemonList] = useState(pokemonData);

  return (
    <DexWrapper>
      <DashBoard
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
      ></DashBoard>
      <PokemonList
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
      ></PokemonList>
    </DexWrapper>
  );
};

//style
const DexWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: #ffd260;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default Dex;
