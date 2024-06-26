import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState([])

  const getPokemon = async () => {
    const getPokemonFromApi = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemonsData = getPokemonFromApi.data.results;
    const pokemonData = [...pokemon, ...pokemonsData];
    setPokemon(pokemonData)
  }

  return (<>
  <p onClick={getPokemon}>Hola</p>
  </>)
}; 

export default App;
