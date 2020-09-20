import React from 'react';
import Routes from './routes';

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
         <Routes />        
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
