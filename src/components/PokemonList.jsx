import React from 'react';
import PokemonCard from './PokemonCard';
import { ListWrapper } from '../styles/styles';
import { useContext } from 'react';
import { DexContext } from '../context/DexContext.jsx';

const PokemonList = () => {
  const { pokemonList, addDexList } = useContext(DexContext);

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
