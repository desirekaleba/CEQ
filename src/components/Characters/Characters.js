import React from 'react';

import Character from '../Character/Character';
import Loading from '../Common/Loading';
import './Characters.css';

const Characters = ({ characters, isLoading }) => {
  return isLoading ? (
    <Loading />
  ) : (
    <div className='cards'>
      {characters.map((character) => (
        <Character
          key={character.char_id}
          singleCharacter={character}
        ></Character>
      ))}
    </div>
  );
};

export default Characters;
