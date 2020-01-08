import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Routes from './routes/routes';
import { getName } from './functions/getsData';
import reducers from './store/reducers';

const middleware = [];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers(),
  composeEnhancer(
    applyMiddleware(...middleware),
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="header-default">
          {getName()}
        </header>
        <div className="content-body">
          <Routes />
        </div>
      </div>
    </Provider>
  );
}

export default App;
