import React from 'react';
import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import { Wrapper } from './styles/styles';

const App = () => {
  return (
    <>
      <Wrapper />
      <Router />
    </>
  );
};

export default App;
