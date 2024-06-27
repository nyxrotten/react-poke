import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const urlBase = "https://pokeapi.co/api/v2/pokemon/"
  const [pokemon, setPokemon] = useState([{}]);
  const [search, setSearch] = useState("");
  const [pokemonFound, setPokemonFound] = useState("")


  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getPokemon = async () => {
    const getPokemonFromApi = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302");
    const pokemonsData = getPokemonFromApi.data.results
    setPokemon([...pokemon, ...pokemonsData])
  }

  useEffect (() => {
    getPokemon()
    const found = pokemon.find((poke) => poke.name === search)
    if (found == true) {
      setPokemonFound([...pokemonFound, ...found])
      const pokeData =  axios.get(`${urlBase}${found.name}`)
      const onePokemon = pokeData.data 
    }
    console.log (found)
    
  }, [search])


  return (
  <>
    <div className='pokeBox'>
    <h2>Find your Pokémon</h2>
      <div className='searchBox'>
      <input type="text" placeholder='Pokemon name' onChange={handleChange}></input>
      {/* <button onClick={getPokemon}>Catch'em all</button> */}
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
