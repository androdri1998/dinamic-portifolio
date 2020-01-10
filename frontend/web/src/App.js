import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './store/reducers';
import SettingsRightApp from './screens/shared-components/SettingsRight/SettingsRightApp';
import Layout from './Layout';

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
      <div className="flex row">
        <Layout />
        <SettingsRightApp />
      </div>
    </Provider>
  );
}

export default App;
