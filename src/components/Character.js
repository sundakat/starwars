import React from 'react';
import styled from 'styled-components';


const CharacterCard = styled.div`
    padding: 0.9rem;
    width: 400px;
    background: #e2e2e1;
    opacity: 0.9;
    color: #eca637;
    border-radius: 2%;
    margin: 15px;
    box-shadow: 20px 10px 10px #29343c;
    `;


const Character = ({ character }) => (
    <CharacterCard>
        <h2>{character.name}</h2>
        <p>
            <span>Gender:</span> {character.gender}
        </p>
        <p>
            <span>Birth year:</span> {character.birth_year}
        </p>
        <p>
            <span>Height:</span> {character.height}
        </p>
        <p>
            <span>Mass:</span> {character.mass}
        </p>
        <p>
            <span>Eye color:</span> {character.eye_color}
        </p>
        <p>
            <span>Skin color:</span> {character.skin_color}
        </p>
        <p>
            <span>Hair color:</span> {character.hair_color}
        </p>
    </CharacterCard>
);

export default Character;
