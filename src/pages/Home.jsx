import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeWrapper, Logo } from '../styles/styles';
import Button from '../common/Button';

const Home = () => {
  //navi
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <Logo src="../images/pokemonLogo.png" alt="HomeLogo" />
      <Button
        onClick={() => navigate('/dex')}
        $buttonWidth="200px"
        $buttonHeight="40px"
      >
        포켓몬 도감 바로가기
      </Button>
    </HomeWrapper>
  );
};

export default Home;
