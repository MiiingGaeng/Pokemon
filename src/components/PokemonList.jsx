import React from 'react';
import PokemonCard from './PokemonCard';
import { ListWrapper } from '../styles/styles';
import MOCK_DATA from '../data/MOCK_DATA.js';

const PokemonList = () => {
  const pokemonList = MOCK_DATA;

  return (
    <ListWrapper>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isInList={true}>
            ADD
          </PokemonCard>
        );
      })}
    </ListWrapper>
  );
};

export default PokemonList;
