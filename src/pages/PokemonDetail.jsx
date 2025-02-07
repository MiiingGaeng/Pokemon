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
import { useContext } from 'react';
import { DexContext } from '../context/DexContext.jsx';

const PokemonDetail = () => {
  //context
  const { pokemonList, addDexList, removeDexList, isCatched } =
    useContext(DexContext);

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
              onClick={() => removeDexList(id)}
              $buttonWidth="107px"
              $buttonHeight="48px"
            >
              DELETE
            </Button>
          ) : (
            <Button
              onClick={() => addDexList(id)}
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
