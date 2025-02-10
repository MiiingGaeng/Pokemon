import React from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardBack,
  CardFront,
  CardInner,
  CardLogo,
  TypesWrapper,
  TypeText,
} from '../styles/styles';
import { useDispatch } from 'react-redux';
import { addDexList, removeDexList } from '../redux/dexSlice';

const PokemonCard = ({ pokemon, isInList }) => {
  //rtk
  const dispatch = useDispatch();

  const handleAddEvent = (e) => {
    e.stopPropagation();
    dispatch(addDexList(id));
  };

  const handleRemoveEvent = (e) => {
    e.stopPropagation();
    dispatch(removeDexList(id));
  };

  //props
  const { id, korean_name, types, img_url } = pokemon;

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/detail?id=${id}`);
  };

  return (
    <Card>
      <CardInner className="card-inner">
        <CardFront onClick={() => goToDetail(id)}>
          <img src={img_url} alt="card_pocketmonImg" />
          <h3>{korean_name}</h3>
          <p>No. {id}</p>
          <TypesWrapper>
            {types.map((type) => {
              if (type === '노말')
                return (
                  <TypeText $typeColor="#ffa856" key={type}>
                    노말
                  </TypeText>
                );
              if (type === '불꽃')
                return (
                  <TypeText $typeColor="#ff5346" key={type}>
                    불꽃
                  </TypeText>
                );
              if (type === '물')
                return (
                  <TypeText $typeColor="#497cfc" key={type}>
                    물
                  </TypeText>
                );
              if (type === '풀')
                return (
                  <TypeText $typeColor="#5eaf4e" key={type}>
                    풀
                  </TypeText>
                );
              if (type === '전기')
                return (
                  <TypeText $typeColor="#f9d159" key={type}>
                    전기
                  </TypeText>
                );
              if (type === '얼음')
                return (
                  <TypeText $typeColor="#6ed6ff" key={type}>
                    얼음
                  </TypeText>
                );
              if (type === '격투')
                return (
                  <TypeText $typeColor="#ae724d" key={type}>
                    격투
                  </TypeText>
                );
              if (type === '독')
                return (
                  <TypeText $typeColor="#7d47a5" key={type}>
                    독
                  </TypeText>
                );
              if (type === '땅')
                return (
                  <TypeText $typeColor="#73533a" key={type}>
                    땅
                  </TypeText>
                );
              if (type === '비행')
                return (
                  <TypeText $typeColor="#657aa2" key={type}>
                    비행
                  </TypeText>
                );
              if (type === '에스퍼')
                return (
                  <TypeText $typeColor="#bc5bb0" key={type}>
                    에스퍼
                  </TypeText>
                );
              if (type === '벌레')
                return (
                  <TypeText $typeColor="#4b654f" key={type}>
                    벌레
                  </TypeText>
                );
              if (type === '바위')
                return (
                  <TypeText $typeColor="#707070" key={type}>
                    바위
                  </TypeText>
                );
              if (type === '고스트')
                return (
                  <TypeText $typeColor="#b9a9c6" key={type}>
                    고스트
                  </TypeText>
                );
              if (type === '드래곤')
                return (
                  <TypeText $typeColor="#c42a00" key={type}>
                    드래곤
                  </TypeText>
                );
              if (type === '악')
                return (
                  <TypeText $typeColor="#242424" key={type}>
                    악
                  </TypeText>
                );
              if (type === '강철')
                return (
                  <TypeText $typeColor="#545459" key={type}>
                    강철
                  </TypeText>
                );
              if (type === '페어리')
                return (
                  <TypeText $typeColor="#ff5c95" key={type}>
                    페어리
                  </TypeText>
                );
            })}
          </TypesWrapper>
        </CardFront>
        <CardBack onClick={() => goToDetail(id)}>
          {!isInList ? (
            <Button
              onClick={handleRemoveEvent}
              $buttonWidth="120px"
              $buttonHeight="30px"
              id="card-btn"
            >
              DELETE
            </Button>
          ) : (
            <Button
              onClick={handleAddEvent}
              $buttonWidth="120px"
              $buttonHeight="30px"
              id="card-btn"
            >
              ADD
            </Button>
          )}
          <CardLogo src="../images/pokemonLogo.png" alt="CardLogo" />
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default PokemonCard;
