import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [urlParams, setUrlParams] = useState("")


  const handleChange = (e) => {
    setPokemon(e.target.value);
    setUrlParams(e.target.value)
    console.log(pokemon)
    console.log(urlParams)
  }

  const getPokemon = async () => {
    const getPokemonFromApi = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302");
    const pokemonsData = getPokemonFromApi.data.results
    setPokemon({...pokemonsData})
    console.log(pokemon)
  }

  useEffect (() => {
    alert(pokemon[0].name)
  })
  return (
  <>
    <div className='pokeBox'>
    <h2>Find your Pokémon</h2>
      <div className='searchBox'>
      <input type="text" placeholder='Pokemon name' onChange={handleChange}></input>
      <button onClick={getPokemon}>Catch'em all</button>
      </div>
      <div className='pokemonCard'>
        <h3>Pokémon name:</h3>
        <h4>{pokemon.name}</h4>
        <h3>Pokemon type</h3>
        <h4>{}</h4>
        {/* <img src={pokemon.sprites.front_default}></img> */}
      </div>
      <button>Delete</button>
    </div>
  
  </>)
}; 

export default App;
