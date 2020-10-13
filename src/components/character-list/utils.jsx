import React from "react";
import { Card } from "../";

export const seasonsAppearenceString = (seasons) =>
  seasons.map((season) => season.toString());

export const transformSeason = (seasons) => {
  if (seasons && seasons.length > 0) {
    const seasonToString = seasonsAppearenceString(seasons);
    return seasonToString.join(", ");
  }
  return "";
};

export const findCharacter = ({ searchValue, characters }) => {
  const mayusSearchValue = searchValue.toUpperCase();
  return characters.filter((character) =>
    character.name.toUpperCase().includes(mayusSearchValue)
  );
};

export const filteredCharacterList = ({ searchValue, characters }) => {
  return findCharacter({ characters, searchValue }).map((character) => (
    <Card
      img={character.img}
      name={character.name}
      occupation={character.occupation.join()}
      status={character.status}
      portrayed={character.portrayed}
      nickname={character.nickname}
      key={character.char_id}
      seasons={character.appearance}
    />
  ));
};
