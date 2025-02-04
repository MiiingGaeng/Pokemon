import React from 'react';
import styled from 'styled-components';
import DashCard from './DashCard';

const DashBoard = ({ dexList, removeDexList }) => {
  return (
    <DashWrapper>
      <TitleH1>나만의 포켓몬</TitleH1>
      <DexUl>
        {dexList ? (
          dexList.map((catchedPokemon) => {
            return (
              <DashCard
                key={catchedPokemon.id}
                pokemon={catchedPokemon}
                removeDexList={removeDexList}
              />
            );
          })
        ) : (
          <p>아직 잡은 포켓몬이 없군요!</p>
        )}
      </DexUl>
    </DashWrapper>
  );
};

//style
const DashWrapper = styled.div`
  width: 900px;
  height: 300px;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleH1 = styled.h1`
  font-size: 20px;
  width: 80%;
  height: 50px;
  border-bottom: 1px solid #ffd260;
  text-align: center;
  line-height: 50px;
  margin-bottom: 20px;
`;

const DexUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DexLi = styled.li`
  width: 100px;
  height: 100px;
  border: 1px dotted #777;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DashBoard;
