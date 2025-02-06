import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import MOCK_DATA from '../MOCK_DATA';

export const DexContext = createContext();

//Provider
export const DexProvider = ({ children }) => {
  //MOCK DATA
  const pokemonList = MOCK_DATA;
  //LocalStorage + state 변경
  const catchList = JSON.parse(localStorage.getItem('catchList')) || [];
  const [dexList, setDexList] = useState(catchList);

  //catchList(localStorage)에 있는지 확인
  const isCatched = (id) => {
    return [...catchList].some((pokemon) => pokemon.id === id);
  };

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
    <DexContext.Provider
      value={{
        pokemonList,
        catchList,
        dexList,
        setDexList,
        addDexList,
        removeDexList,
        isCatched,
      }}
    >
      {children}
    </DexContext.Provider>
  );
};
