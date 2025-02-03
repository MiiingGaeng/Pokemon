import React from 'react';
import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';

const App = () => {
  return (
    <>
      <Wrapper />
      <Router />
    </>
  );
};

//style
const Wrapper = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  ul,li{
    list-style: none;
  }
`;

export default App;
