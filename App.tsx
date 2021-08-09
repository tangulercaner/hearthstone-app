import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/containers/navigation/Navigator';
import { Store } from './src/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
};

export default App;