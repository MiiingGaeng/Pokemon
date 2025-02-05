import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ children, pokemon, onClick }) => {
  //props
  const { id, korean_name, types, img_url } = pokemon;

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/detail?id=${id}`);
  };

  return (
    <CardLi onClick={() => goToDetail(id)}>
      <img src={img_url} alt="card_pocketmonImg" />
      <h3>{korean_name}</h3>
      <p>{types}</p>
      <p>No. {id}</p>
      <Button onClick={onClick}>{children}</Button>
    </CardLi>
  );
};

//style
const CardLi = styled.li`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #777;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default PokemonCard;
