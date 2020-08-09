import React from 'react';

const Characters = ( { characters, isLoading }) => {
    return isLoading? <div>Loading...</div> : <div>
        {
            characters.map(character => (
                <div>{character.name}</div>
            ))
        }
    </div>  
    
};

export default Characters;