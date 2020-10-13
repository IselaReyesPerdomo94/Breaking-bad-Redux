import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { startFetchCharacters, getCharacters, getLoadingStatus } from '../../ducks/characters';

import { Nav, Search, CharacterList } from '../../components';

import Loader from 'react-loader-spinner';

import './style.css';

/**
 * Home is the principal page.
 * @returns {*} React component.
 */
const Home = () => {
  const dispatch =  useDispatch();
  const characters =  useSelector(getCharacters);
  const isLoading = useSelector(getLoadingStatus);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange= (e) => {
    setSearchValue(e.target.value)
  }

  useEffect( ()=>{
    dispatch(startFetchCharacters());
  }, [dispatch]);

  return(
    <div className="App">
      <Nav />
      <main>
        <Search
          value={searchValue}
          onChange={handleSearchChange}
        />
        <section className="characters-section">
          { isLoading && 
            <div className="loader">
              <Loader 
                type="Puff" 
                color="yellow" 
                height={80} 
                width={80} 
                className="loader" 
              />
            </div>
          }
          {
            characters.length > 0 && 
            <CharacterList
              characters={characters}
              searchValue={searchValue}
            />
          }
        </section>
      </main>
    </div>
    )
}

export default Home;