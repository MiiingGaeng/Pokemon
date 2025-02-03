import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, setPokemonList }) => {
  return (
    <ListWrapper>
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ListWrapper>
  );
};

//style
const ListWrapper = styled.div`
  width: 900px;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export default PokemonList;
