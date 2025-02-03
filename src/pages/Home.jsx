import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  //navi
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <h1>Pocketmon</h1>
      <button onClick={() => navigate('/dex')}>포켓몬 도감 바로가기</button>
    </HomeWrapper>
  );
};

//style
const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffd260;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
