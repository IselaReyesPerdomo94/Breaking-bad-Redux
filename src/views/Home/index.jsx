import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {startFetchCharacters} from '../../ducks/characters';

import {Nav, Search, CharacterList} from '../../components';

import Loader from 'react-loader-spinner';

import './style.css';

const Home = ({characters, startFetchCharacters, isLoading}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange= (e) => {
      setSearchValue(e.target.value)
    }

    useEffect( ()=>{
      startFetchCharacters()
    }, [])
    return(
    <div className="App">
      <Nav/>
      <main>
        <Search
          value={searchValue}
          onChange={handleSearchChange}
        />
        <section className="characters-section">
          { isLoading && <div className="loader">
            <Loader 
            type="Puff" 
            color="yellow" 
            height={80} 
            width={80} 
            className="loader"/>
            </div>
          }
            <CharacterList
              characters={characters}
              searchValue={searchValue}
            />
        </section>
      </main>
    </div>
    )
}

const mapStateToProps = ({characters}) => {
  return {
    characters: characters.characters,
    isLoading: characters.loading
  }
}

const mapDispatchToProps = {
  startFetchCharacters
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);