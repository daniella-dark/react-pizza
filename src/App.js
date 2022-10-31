import React from 'react';

import Header from './components/Header';
import './scss/app.scss';
import AppRouter from './components/AppRouter';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <AppRouter searchValue={searchValue} />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
