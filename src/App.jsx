import React from 'react';
import Router from './shared/Router';
import { Wrapper } from './styles/styles';
import { DexProvider } from './context/DexContext';

const App = () => {
  return (
    <>
      <Wrapper />
      <DexProvider>
        <Router />
      </DexProvider>
    </>
  );
};

export default App;
