import React from 'react';
import './App.css';
import ThumbnailsList from './containers/ThumbnailsList.js'
import SearchQueryInput from './containers/SearchQueryInput';

function App() {

  return (
    <div className="App">
      <header>
        <SearchQueryInput />
      </header>
      <ThumbnailsList />
    </div>
  )
}

export default App;
