import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Home from './Home';
import SearchBar from './SearchBar';
import Post from './post';
import './App.css';
import MyForm from './Form';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
     
    <Header />
     
     <SearchBar className="search"/>
     <MyForm />
     <Home />
     <Post className="change post" />
     <Counter />
    </div>
  );
}

export default App;
