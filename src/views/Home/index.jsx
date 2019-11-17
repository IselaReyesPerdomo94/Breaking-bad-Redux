import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {startFetchCharacters} from '../../ducks/characters';

import {Card, Nav} from '../../components';

import Loader from 'react-loader-spinner';

import './style.css';

const Home = ({characters, startFetchCharacters, isLoading}) => {
    useEffect( ()=>{
      startFetchCharacters()
    }, [])
    return(
    <div className="App">
      <Nav/>
      <main>
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