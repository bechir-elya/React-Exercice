import React from 'react';

function NavBar({ pokemonList, setPokemonIndex }) {

    return (
        <>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
                    {pokemon.name}
                </button>
            ))}
        </>
    );
}

export default NavBar;
