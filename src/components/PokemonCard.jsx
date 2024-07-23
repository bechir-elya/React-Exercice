import React from 'react';



function PokemonCard({ pokemon }) {

  return (
    <>
      <figure style={{ backgroundColor: 'lightgreen', borderRadius: '10px' }}>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
