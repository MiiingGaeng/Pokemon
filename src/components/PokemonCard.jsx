import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { CardLi } from '../styles/styles';

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
      <Button onClick={onClick} $buttonWidth="70px" $buttonHeight="30px">
        {children}
      </Button>
    </CardLi>
  );
};

export default PokemonCard;
