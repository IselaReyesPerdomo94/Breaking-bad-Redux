import React from 'react';
import Card from './components/card/index';
import {FaSearch} from 'react-icons/fa';
import {FaStar, FaHeart} from 'react-icons/fa';
import './App.css';

const App =() =>{
  return (
    <div className="App">
      <header className="header">
        <div>
          <h1 className="breaking">Breaking</h1>
          <h1 className="bad">Bad</h1>
        </div>
        <div className="search-container">
          <label htmlFor="search"><FaSearch/></label>
          <input type="search" name="search"/>
        </div>
      </header>
      <main>
        <nav className="nav">
          <a>See my favorites <FaStar className="star-link"/></a>
          <a>See my favorites quotes <FaHeart className="heart-link"/></a>
        </nav>
        <Card/>
      </main>
    </div>
  );
}

export default App;
