import React from 'react';
import PokemonCard from './PokemonCard';
import { DashLogo, DashWrapper, DexLi, DexUl } from '../styles/styles';
import { useSelector } from 'react-redux';

const DashBoard = () => {
  //rtk
  const dexList = useSelector((store) => store.dex.dexList);

  return (
    <DashWrapper>
      <DashLogo src="../images/pokemonLogo.png" alt="DashLogo" />
      <DexUl>
        {[...Array(6)].map((_, index) =>
          dexList[index] ? (
            <PokemonCard key={dexList[index].id} pokemon={dexList[index]} />
          ) : (
            <DexLi key={`empty-${index}`} />
          )
        )}
      </DexUl>
    </DashWrapper>
  );
};

export default DashBoard;
