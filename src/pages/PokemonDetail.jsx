import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../common/Button';
import {
  ButtonWrapper,
  DetailTextWrapper,
  DetailWrapper,
  DexImg,
  PokemonDescription,
  PokemonId,
  PokemonImg,
  PokemonName,
  PokemonTypes,
  TypesWrapper,
} from '../styles/styles';
import MOCK_DATA from '../data/MOCK_DATA.js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addDexList, removeDexList } from '../redux/dexSlice.js';

const PokemonDetail = () => {
  //rtk
  const pokemonList = MOCK_DATA;
  const dexList = useSelector((store) => store.dex.dexList);
  const isCatched = (id) => dexList.some((pokemon) => pokemon.id === id);

  const dispatch = useDispatch();
  const handleAddEvent = () => {
    dispatch(addDexList(id));
  };
  const handleRemoveEvent = () => {
    dispatch(removeDexList(id));
  };

  //query params에서 해당 id 값 가져오기
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  //포켓몬 전체 리스트 - 해당 id의 데이터 불러오기
  const selectedPokemon = pokemonList.find(
    (pokemon) => pokemon.id === parseInt(selectedId)
  );

  //구조분해할당으로 값 꺼내기
  const { img_url, korean_name, id, types, description } = selectedPokemon;

  //button - dex로 돌아가는 로직
  const navigate = useNavigate();
  const goToDex = () => {
    navigate('/dex');
  };

  return (
    <DetailWrapper>
      <DexImg>
        <PokemonImg src={img_url} alt="detail_pocketmonImg" />
        <DetailTextWrapper>
          <PokemonName>{korean_name}</PokemonName>
          <PokemonId>No. {id}</PokemonId>
          <TypesWrapper>
            {types.map((type) => (
              <PokemonTypes key={type}>{type}</PokemonTypes>
            ))}
          </TypesWrapper>
          <PokemonDescription>{description}</PokemonDescription>
        </DetailTextWrapper>
        <ButtonWrapper>
          {isCatched(id) ? (
            <Button
              onClick={handleRemoveEvent}
              $buttonWidth="107px"
              $buttonHeight="48px"
            >
              DELETE
            </Button>
          ) : (
            <Button
              onClick={handleAddEvent}
              $buttonWidth="107px"
              $buttonHeight="48px"
            >
              ADD
            </Button>
          )}
          <Button onClick={goToDex} $buttonWidth="107px" $buttonHeight="48px">
            RETURN TO DEX
          </Button>
        </ButtonWrapper>
      </DexImg>
    </DetailWrapper>
  );
};

export default PokemonDetail;
