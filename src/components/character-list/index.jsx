import React, { Fragment } from "react";

import { Card } from "../index";
import { transformSeason, filteredCharacterList } from "./utils.jsx";

/**
 * CharacterList is in charge of render full or filtered list of characters.
 * @param 	{Array} 	characters 	Contains all characters.
 * @param 	{String}	searchValue	Value typed in search component.
 * @returns {*} React component. 
 */
const CharacterList = ({ characters, searchValue }) => {
	const areCharactersToRender = characters.length > 0;
  const showFilteredCharacters = areCharactersToRender && searchValue;
	const showFullList = areCharactersToRender && !searchValue;

  return (
    <Fragment>
			{showFilteredCharacters && filteredCharacterList({searchValue, characters})}
			{showFullList && 
				characters.map(character =>
				<Card
					img={character.img}
					name={character.name}
					occupation={character.occupation.join(", ")}
					status={character.status}
					portrayed={character.portrayed}
					nickname={character.nickname}
					key={character.char_id}
					seasons={transformSeason(character.appearance)} 
				/>)}
    </Fragment>
  );
};

export default CharacterList;
