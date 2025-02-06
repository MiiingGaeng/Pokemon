import React from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { CardLi } from '../styles/styles';
import { useContext } from 'react';
import { DexContext } from '../context/DexContext';

const PokemonCard = ({ pokemon, isInList }) => {
  //context
  const { addDexList, removeDexList } = useContext(DexContext);

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
      {!isInList ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            removeDexList(id);
          }}
          $buttonWidth="120px"
          $buttonHeight="30px"
        >
          DELETE
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            addDexList(id);
          }}
          $buttonWidth="120px"
          $buttonHeight="30px"
        >
          ADD
        </Button>
      )}
    </CardLi>
  );
};

export default PokemonCard;
