import React from 'react';

function NavBar({ pokemonIndex, nextPokemon, previousPokemon, pokemonListLength }) {
    return (
        <>
            <button onClick={previousPokemon} style={{ display: pokemonIndex > 0 ? 'inline-block' : 'none' }}>Précédent</button>
            <button onClick={nextPokemon} style={{ display: pokemonIndex < pokemonListLength - 1 ? 'inline-block' : 'none' }}>Suivant</button>
        </>
    );
}

export default NavBar;
