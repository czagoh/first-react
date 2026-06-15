interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
    bgColor?: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {

  return (
    <figure className="card" style={{ backgroundColor: pokemon.bgColor }}>
      {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}

      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;