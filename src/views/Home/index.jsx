import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import {startFetchCharacters} from '../../ducks/characters';
import {startFetchQuotes} from '../../ducks/quotes';

import {Card} from '../../components';
import {FaSearch} from 'react-icons/fa';
import {FaStar, FaHeart} from 'react-icons/fa';

import './style.css';

const Home = ({characters,startFetchCharacters}) => {
    useEffect( ()=>{
      startFetchCharacters()
    }, [])
    return(
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
          <a href="#a">Character <FaStar className="star-link"/></a>
          <a href="#b">Quotes <FaHeart className="heart-link"/></a>
        </nav>
        <section>
        {
        characters && characters.map(character => {          
          return <Card 
                    img={character.img}
                    name={character.name}
                    occupation={character.occupation.join(', ')}
                    status={character.status}
                    portrayed={character.portrayed}
                    nickname={character.nickname}
                    key={character.char_id}
                  />
        })
      }
        </section>
      </main>
      
    </div>
    )
}

const mapStateToProps = ({characters}) => {
  return {
    characters: characters.characters
  }
}

const mapDispatchToProps = {
  startFetchCharacters,
  startFetchQuotes
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);