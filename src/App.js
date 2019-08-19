import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Home from './Home';
import SearchBar from './SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
     
    <Header />
     <Home />
     <SearchBar className="search"/>
    </div>
  );
}

export default App;
