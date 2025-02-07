import React from 'react';
import Router from './shared/Router';
import { Wrapper } from './styles/styles';
import { ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <>
      <Wrapper />
      <Provider store={store}>
        <Router />
      </Provider>
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
