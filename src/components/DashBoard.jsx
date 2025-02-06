import React from 'react';
import PokemonCard from './PokemonCard';
import { useContext } from 'react';
import { DexContext } from '../context/DexContext';
import { DashWrapper, DexUl, TitleH1 } from '../styles/styles';

const DashBoard = () => {
  //context
  const { dexList } = useContext(DexContext);

  return (
    <DashWrapper>
      <TitleH1>나만의 포켓몬</TitleH1>
      <DexUl>
        {dexList ? (
          dexList.map((catchedPokemon) => {
            return (
              <PokemonCard key={catchedPokemon.id} pokemon={catchedPokemon}>
                DELETE
              </PokemonCard>
            );
          })
        ) : (
          <p>아직 잡은 포켓몬이 없군요!</p>
        )}
      </DexUl>
    </DashWrapper>
  );
};

export default DashBoard;
