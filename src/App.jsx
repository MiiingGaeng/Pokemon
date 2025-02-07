import React from 'react';
import Router from './shared/Router';
import { Wrapper } from './styles/styles';
import { DexProvider } from './context/DexContext';
import { ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';

const App = () => {
  return (
    <>
      <Wrapper />
      <DexProvider>
        <Router />
      </DexProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default App;
