import React from 'react';

import './Character.css';

const Character = ({ singleCharacter }) => {

    console.log(singleCharacter);
    
    return <div className='card'>
                <div className='card-img'>
                    <img src={singleCharacter.img} alt={singleCharacter.name} />
                </div>
                <div className='card-info'>
                    <h2 className="character-name">{singleCharacter.name}</h2>
                    <p className='character-nickname'><strong>Nickname:</strong> {singleCharacter.nickname}</p>
                    <p className='character-portrayed'><strong>Portrayed:</strong> {singleCharacter.portrayed}</p>
                    <p className='character-dob'><strong>DOB:</strong> {singleCharacter.birthday}</p>
                    <p className='character-status'><strong>Status:</strong> {singleCharacter.status}</p>
                    <p className='character-occupation'><strong>Occupation:</strong></p>
                    <ul className='character-occupation-list'>
                        {
                            singleCharacter.occupation.map((occ, key) => (<li key={key}>{occ}</li>))
                        }
                    </ul>
                </div>
            </div>
}

export default Character;