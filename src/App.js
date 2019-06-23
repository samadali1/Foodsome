import React, { Component } from 'react';
import './App.css';
import Routes from './Config/router';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    return (    
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className="App">
              <Routes />
            </div>
        </PersistGate>
        </Provider>
    )
  }
}

export default App;