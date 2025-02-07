import React from 'react';
import PokemonCard from './PokemonCard';
import { useContext } from 'react';
import { DexContext } from '../context/DexContext';
import { DashLogo, DashWrapper, DexLi, DexUl } from '../styles/styles';

const DashBoard = () => {
  //context
  const { dexList } = useContext(DexContext);

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
