import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { ListWrapper } from '../styles/styles';

const PokemonList = ({ pokemonList, addDexList }) => {
  return (
    <ListWrapper>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={(e) => {
              e.stopPropagation();
              addDexList(pokemon.id);
            }}
          >
            ADD
          </PokemonCard>
        );
      })}
    </ListWrapper>
  );
};

export default PokemonList;
