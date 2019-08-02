import './App.scss';

/** All the global import */
import React from 'react';

/** All the local import */
import AppRouter from '../router';
import { store } from '../../src/store/congifureStore';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;