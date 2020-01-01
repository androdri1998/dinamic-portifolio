import React from 'react';
import Routes from './routes';
import { getName } from '../functions/getsData';

function App() {
  return (
    <div className="App">
      <header className="header-default">
        {getName()}
      </header>
      <div className="content-body">
        <Routes />
      </div>
    </div>
  );
}

export default App;
