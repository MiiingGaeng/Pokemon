import PokemonList from '../components/PokemonList.jsx';
import DashBoard from '../components/DashBoard';
import { DexWrapper } from '../styles/styles.js';
import { useContext } from 'react';
import { DexContext } from '../context/DexContext.jsx';

const Dex = () => {
  //context
  const { pokemonList, dexList, addDexList, removeDexList } =
    useContext(DexContext);

  return (
    <DexWrapper>
      <DashBoard></DashBoard>
      <PokemonList></PokemonList>
    </DexWrapper>
  );
};

export default Dex;
