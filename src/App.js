import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Home from './Home';
import SearchBar from './SearchBar';
import Post from './post';
import './App.css';

function App() {
  return (
    <div className="App">
     
    <Header />
     
     <SearchBar className="search"/>
     <Home />
     <Post className="post" />
    </div>
  );
}

export default App;
