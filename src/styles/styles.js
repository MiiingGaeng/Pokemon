import styled, { createGlobalStyle } from 'styled-components';

//convention
//main color: #ffd260 (butter yellow)
//back color: #
//point color: #ff7028 (orange)

//App.jsx
export const Wrapper = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  ul,li{
    list-style: none;
  }
`;

//---Home---
//Home.jsx
export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 500px;
  filter: drop-shadow(0 0 15px #333);
`;

//---Dex---
//Dex.jsx
export const DexWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
  overflow: auto;
  background: #ffd260;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

//DashBoard.jsx
export const DashWrapper = styled.div`
  width: 80%;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DashLogo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

export const DexUl = styled.ul`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 2px solid #ffd260;
`;

export const DexLi = styled.li`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://i.pinimg.com/550x/f5/54/89/f5548916ca86b30f7b8f418e4c5c6794.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 50%;
  overflow: hidden;
`;

//PokemonList.jsx
export const ListWrapper = styled.div`
  width: 80%;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: auto;
  gap: 20px;
`;

//-----Card-----
//PokemonCard.jsx
export const Card = styled.li`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  background: #ffd260;
  padding: 8px;
  position: relative;
  cursor: pointer;
  perspective: 1000px;

  &:hover > .card-inner {
    transform: rotateY(180deg);
  }
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
`;

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  background: #fff;
  backface-visibility: hidden;

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    font-size: 15px;
  }

  p {
    font-size: 15px;
  }
`;

export const TypeText = styled.div`
  display: inline-block;
  width: 40px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  font-size: 12px;
  border-radius: 3px;
  padding: 1px;
  color: #fff;
  background-color: ${(props) => props.$typeColor};
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #ffd260;
  border-radius: 8px;
  backface-visibility: hidden;
  transform: rotateX(180deg);

  button {
    transform: rotateX(180deg) rotateY(180deg);
  }

  img {
    transform: rotateX(180deg) rotateY(180deg);
  }
`;

export const CardLogo = styled(DashLogo)`
  width: 100px;
`;

//---Detail---
//PokemonDetail.jsx
export const DetailWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffd260;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DexImg = styled.div`
  position: relative;
  width: 760px;
  height: 550px;
  background-image: url(../../images/pokeDex.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 35px;
`;

export const PokemonImg = styled.img`
  width: 260px;
  height: 175px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 155px;
  left: 58px;
  object-fit: contain;
`;

export const DetailTextWrapper = styled.div`
  position: absolute;
  top: 165px;
  right: 55px;
  width: 250px;
  height: 120px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PokemonName = styled.h3`
  font-size: 17px;
`;

export const PokemonId = styled.p`
  font-size: 12px;
  margin-left: 1px;
`;

export const TypesWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const PokemonTypes = styled.p`
  font-size: 12px;
  display: inline-block;
  min-width: 40px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  border-radius: 2px;
  border: 1px solid black;
`;

export const PokemonDescription = styled.p`
  font-size: 15px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 41px;
  right: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 21.5px;
`;

//---Commons---
//Button.jsx
export const StyledButton = styled.button`
  width: ${(props) => props.$buttonWidth};
  height: ${(props) => props.$buttonHeight};
  border-radius: 8px;
  background: #ff7028;
  border: none;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #9a3f12;
  }
`;
