import PokemonList from '../components/PokemonList.jsx';
import DashBoard from '../components/DashBoard';
import styled from 'styled-components';
import MOCK_DATA from '../MOCK_DATA.js';
import { useState } from 'react';

const Dex = () => {
  //data + state
  const catchList = JSON.parse(localStorage.getItem('catchList')) || [];
  const pokemonData = MOCK_DATA;

  const [pokemonList, setPokemonList] = useState(pokemonData);
  const [dexList, setDexList] = useState(catchList);

  //포켓몬 추가 로직
  const addDexList = (id) => {
    const catchPokemon = [...pokemonList].find((pokemon) => pokemon.id === id);
    const newDexList = [...dexList, catchPokemon];

    //예외처리 : dexList가 6개 이상이면 return
    if (newDexList.length > 6) {
      alert('더이상 잡을 수 없어요!');
      return;
    }

    //예외처리 : dexList에 이미 존재하면 return
    if (dexList.some((pokemon) => pokemon.id === id)) {
      alert('이미 잡은 포켓몬이에요!');
      return;
    }

    localStorage.setItem('catchList', JSON.stringify(newDexList));
    setDexList(newDexList);

    alert('야생의 포켓몬을 잡았습니다!');
  };

  //포켓몬 삭제 로직
  const removeDexList = (id) => {
    const newDexList = [...dexList].filter((pokemon) => pokemon.id !== id);

    localStorage.setItem('catchList', JSON.stringify(newDexList));
    setDexList(newDexList);

    alert('앗! 포켓몬이 풀숲으로 돌아갔습니다!');
  };

  return (
    <DexWrapper>
      <DashBoard dexList={dexList} removeDexList={removeDexList}></DashBoard>
      <PokemonList
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        addDexList={addDexList}
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
