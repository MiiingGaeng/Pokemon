import styled, { createGlobalStyle } from 'styled-components';

//convention
//main color: #ffd260 (butter yellow)
//point color:

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

export const TitleH1 = styled.h1`
  font-size: 20px;
  width: 80%;
  height: 50px;
  border-bottom: 1px solid #ffd260;
  text-align: center;
  line-height: 50px;
  margin-bottom: 20px;
`;

export const DexUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DexLi = styled.li`
  width: 100px;
  height: 100px;
  border: 1px dotted #777;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//-----Dex Detail-----
//PokemonList.jsx
export const ListWrapper = styled.div`
  width: 900px;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

//PokemonCard.jsx
export const CardLi = styled.li`
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

//---Detail---
//PokemonDetail.jsx
export const DetailWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffd260;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

//---Commons---
//Button.jsx
export const StyledButton = styled.button`
  width: ${(props) => props.$buttonWidth};
  height: ${(props) => props.$buttonHeight};
  border-radius: 10px;
  background: #ff1f1f;
  border: 1px solid #333;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #880e0e;
  }
`;
