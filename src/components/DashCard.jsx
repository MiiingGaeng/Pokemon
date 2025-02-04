import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const DashCard = ({ pokemon, removeDexList }) => {
  const { img_url, korean_name, id } = pokemon;

  return (
    <DastCardLi>
      <img src={img_url} alt="pocketmonImg" />
      <h3>{korean_name}</h3>
      <Button onClick={() => removeDexList(id)}>DELETE</Button>
    </DastCardLi>
  );
};

//style
const DastCardLi = styled.li`
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

export default DashCard;
