import React from 'react';

import Header from './components/Header';
import './scss/app.scss';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
