import React from 'react';
import RouterPgae from './Components/RouterPgae'
import logo from './logo.svg';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './App.css';
import reducers from './reducer/reducer';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const mailListStore = createStoreWithMiddleware(reducers);

function App() {
  return (
    <Provider store={mailListStore}>
    <div className="App">
          <RouterPgae/>
    </div>
    </Provider>
  )
}

export default App;
