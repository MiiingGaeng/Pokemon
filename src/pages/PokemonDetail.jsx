import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../MOCK_DATA';
import Button from '../common/Button';

const PokemonDetail = () => {
  //query params에서 해당 id 값 가져오기
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  //포켓몬 전체 리스트 - 해당 id의 데이터 불러오기
  const pokemonData = MOCK_DATA;
  const selectedPokemon = pokemonData.find(
    (pokemon) => pokemon.id === parseInt(selectedId)
  );

  //구조분해할당으로 값 꺼내기
  const { img_url, korean_name, id, types, description } = selectedPokemon;

  //dex로 돌아가는 로직
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
      <Button onClick={goToDex}>RETURN</Button>
    </DetailWrapper>
  );
};

//style
const DetailWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffd260;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PokemonDetail;
