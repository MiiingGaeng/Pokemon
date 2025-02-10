import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import MOCK_DATA from '../data/MOCK_DATA';

//MOCK DATA
const pokemonList = MOCK_DATA;

//dexList 초기값 설정
const initialState = {
  dexList: JSON.parse(localStorage.getItem('catchList')) || [],
};

const dexListSlice = createSlice({
  name: 'dexList',
  initialState,
  reducers: {
    addDexList: (state, action) => {
      // action.payload === 해당 id값
      const catchPokemon = [...pokemonList].find(
        (pokemon) => pokemon.id === action.payload
      );
      //Proxy(Array) {0: {…}} => immer / 배열로 생각!
      const dexList = state.dexList;

      //예외처리 : dexList에 이미 존재하면 return
      if (dexList.some((pokemon) => pokemon.id === action.payload)) {
        toast.warning('이미 잡은 포켓몬이에요!');
        return;
      }
      //예외처리 : dexList가 6개 이상이면 return
      if (dexList.length > 6) {
        toast.warning('더이상 잡을 수 없어요!');
        return;
      }

      //immer 라이브러리 => 불변성을 지킬 필요가 없다!
      state.dexList.push(catchPokemon);
      localStorage.setItem('catchList', JSON.stringify(dexList));

      toast.success('야생의 포켓몬을 잡았습니다!');
    },
    removeDexList: (state, action) => {
      //Proxy(Array) {0: {…}} => immer / 배열로 생각!
      const dexList = state.dexList;
      const newDexList = dexList.filter(
        (pokemon) => pokemon.id !== action.payload
      );

      //immer 라이브러리 => 할당한 변수를 조작 X / state의 값을 직접적으로 핸들링해야함
      state.dexList = newDexList;
      localStorage.setItem('catchList', JSON.stringify(newDexList));

      toast.success('앗! 포켓몬이 풀숲으로 돌아갔습니다!');
    },
  },
});

export const { addDexList, removeDexList } = dexListSlice.actions;
export default dexListSlice.reducer;
