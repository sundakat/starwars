import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import StarWars from "./components/StarWars";
import Buttons from "./components/Buttons";
import bgImg from "./sw-bg.jpg";

const AppContainer = styled.div`
  font-family: sans-serif;
  background: url(${bgImg}) repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding: 1rem 2rem;

  h1 {
    text-align: center;
    font-size: 45px;
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    padding-bottom: 2rem;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [state, setState] = useState({});

  const getData = async url => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getCharacters = url => {
    getData(url).then(data => setState(data));
  };

  useEffect(() => {
    getData("https://swapi.co/api/people/").then(data => setState(data));
  }, []);

  const { results, next, previous } = state;
  const characters = results || [];

  return (
    <AppContainer>
      <h1>React Wars</h1>
      <StarWars characters={characters} />
      <Buttons next={next} previous={previous} action={getCharacters} />
    </AppContainer>
  );
};

export default App;
