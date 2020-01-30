import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

function App() {
  const [planetName, setPlanetName] = useState('');
  const [climate, setClimate] = useState('');
  const [terrain, setTerrain] = useState('');
  const [filmsNumber, setFilmsNumber] = useState('');
  const [loading, setLoading] = useState(false);

  // get a random number to choice a aleatory planet
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // handle the submit button to request the api
  async function handleSubmit() {
    setLoading(true);

    const responsePlanets = await api.get(`/planets/`);
    const numberOfPlanets = responsePlanets.data.count;

    const aleatoryPlanet = getRandomIntInclusive(1, numberOfPlanets);

    const response = await api.get(`/planets/${aleatoryPlanet}/`);

    const data = {
      name: response.data.name,
      climate: response.data.climate,
      terrain: response.data.terrain,
      filmsNumber: response.data.films.length,
    };

    setPlanetName(data.name);
    setClimate(data.climate);
    setTerrain(data.terrain);
    setFilmsNumber(data.filmsNumber);
    setLoading(false);
  }

  return (
    <>
      <Container>
        <Form>
          <p>PLANET NAME: {planetName}</p>
          <hr />
          <p>CLIMATE: {climate}</p>
          <p>TERRAIN: {terrain}</p>
          <p>FEATURED IN {filmsNumber} FILM(S)</p>
        </Form>
      </Container>
      <SubmitButton onClick={handleSubmit} load={loading}>
        {loading ? <FaSpinner color="#000" size={24} /> : <h3>NEXT</h3>}
      </SubmitButton>
    </>
  );
}

export default App;
