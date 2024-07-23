import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const nextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  const previousPokemon = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button onClick={previousPokemon} style={{ display: pokemonIndex > 0 ? 'inline-block' : 'none' }}>Précédent</button>
        <button onClick={nextPokemon} style={{ display: pokemonIndex < pokemonList.length -1 ? 'inline-block' : 'none' }}>Suivant</button>
      </div>
    </>
  )
}

export default App
