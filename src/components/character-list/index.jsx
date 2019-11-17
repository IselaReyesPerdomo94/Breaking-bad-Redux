import React, {Fragment} from 'react';

import {Card} from '../index';

const CharacterList = ({characters, searchValue}) => {

    const searchCharacter = (searchValue) => {
        return characters.filter(character => character.name.toUpperCase().includes(searchValue.toUpperCase())).map(character => <Card 
            img={character.img}
            name={character.name}
            occupation={character.occupation.join(', ')}
            status={character.status}
            portrayed={character.portrayed}
            nickname={character.nickname}
            key={character.char_id}
            seasons={character.appearance.join(', ')}
        />)
    }

    return (
        <Fragment>
            {
                characters.length && (
                    searchValue && searchCharacter(searchValue)) ||
                    characters && characters.map(character => <Card
                        img={character.img}
                        name={character.name}
                        occupation={character.occupation.join(', ')}
                        status={character.status}
                        portrayed={character.portrayed}
                        nickname={character.nickname}
                        key={character.char_id}
                        seasons={character.appearance.join(', ')}
                    />)
            }
        </Fragment>
    )
}

export default CharacterList;