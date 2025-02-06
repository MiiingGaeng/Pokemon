import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MOCK_DATA from '../MOCK_DATA';
import Button from '../common/Button';
import { ButtonWrapper, DetailWrapper } from '../styles/styles';
import { useContext } from 'react';
import { DexContext } from '../context/DexContext.jsx';

const PokemonDetail = () => {
  //context
  const { pokemonList, addDexList, removeDexList } = useContext(DexContext);

  //query params에서 해당 id 값 가져오기
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  //포켓몬 전체 리스트 - 해당 id의 데이터 불러오기
  const selectedPokemon = pokemonList.find(
    (pokemon) => pokemon.id === parseInt(selectedId)
  );

  //구조분해할당으로 값 꺼내기
  const { img_url, korean_name, id, types, description } = selectedPokemon;

  //button - catchList(localStorage)에 있는지 확인
  const catchList = JSON.parse(localStorage.getItem('catchList'));
  const isCatched = [...catchList].some((pokemon) => pokemon.id === id);

  //button - dex로 돌아가는 로직
  const navigate = useNavigate();
  const goToDex = () => {
    navigate('/dex');
  };

  return (
    <DetailWrapper>
      <img src={img_url} alt="detail_pocketmonImg" />
      <h3>{korean_name}</h3>
      <p>No. {id}</p>
      <p>{types}</p>
      <p>{description}</p>
      <ButtonWrapper>
        {isCatched ? (
          <Button
            onClick={() => removeDexList(id)}
            $buttonWidth="120px"
            $buttonHeight="30px"
          >
            DELETE
          </Button>
        ) : (
          <Button
            onClick={() => addDexList(id)}
            $buttonWidth="120px"
            $buttonHeight="30px"
          >
            ADD
          </Button>
        )}
        <Button onClick={goToDex} $buttonWidth="120px" $buttonHeight="30px">
          RETURN TO DEX
        </Button>
      </ButtonWrapper>
    </DetailWrapper>
  );
};

export default PokemonDetail;
