import React from 'react';
import './App.css';
import ThumbnailsList from './containers/ThumbnailsList.js'
import SearchQueryInput from './containers/searchQueryInput';

function App() {

  return (
    <div className="App">
      <SearchQueryInput />
      <ThumbnailsList />
    </div>
  )
}

export default App;
