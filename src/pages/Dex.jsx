import PokemonList from '../components/PokemonList.jsx';
import DashBoard from '../components/DashBoard';
import { DexWrapper } from '../styles/styles.js';

const Dex = () => {
  return (
    <DexWrapper>
      <DashBoard></DashBoard>
      <PokemonList></PokemonList>
    </DexWrapper>
  );
};

export default Dex;
