import React from 'react';

import Character from '../Character/Character';
import './Characters.css';

const Characters = ( { characters, isLoading }) => {
    return isLoading? <div>Loading...</div> : <div className='wrapper cards'>
        {
            characters.map(character => (
                <Character key={character.char_id} singleCharacter={character}></Character>
            ))
        }
    </div>  
    
};

export default Characters;