import React from "react";
import styled from "styled-components";
import Character from "./Character";

const mobile = `(max-width: 480px)`;
const tablet = `(max-width: 800px)`;

const StarWarsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;

  @media ${tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mobile} {
    grid-template-columns: 1fr;
  }
`;

const StarWars = ({ characters }) => (
    <StarWarsContainer>
        {characters.map(character => (
            <Character key={character.name} character={character} />
        ))}
    </StarWarsContainer>
);

export default StarWars;
