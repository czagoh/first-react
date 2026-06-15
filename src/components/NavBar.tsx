interface Pokemon {
  name: string;
  imgSrc?: string;
  bgColor?: string;
}

interface PokemonType {
  type: string;
  color: string;
}

interface NavBarProps {
  pokemonList: Pokemon[];                               // pour faire le .map() des boutons
  pokemonTypes: PokemonType[];                          // pour faire le .map() des types
  setSelectedName: (name: string | null) => void;       // setter reçu en prop
  setSelectedType: (type: string | null) => void;       // pareil
}

function NavBar({ pokemonList, pokemonTypes, setSelectedName, setSelectedType }: NavBarProps) {
  return (
    <>
      <button
        onClick={() => {
          setSelectedName(null);
          setSelectedType(null);
        }}
      >
        Reset
      </button>

      {pokemonList.map((pokemon) => (
        <button
          style={{ backgroundColor: pokemon.bgColor }}
          key={pokemon.name}
          onClick={() => {
            setSelectedName(pokemon.name);
            setSelectedType(null);
          }}
        >
          {pokemon.name}
        </button>
      ))}

      <br />

      {pokemonTypes.map((pokeType) => (
        <button
          key={pokeType.type}
          style={{ backgroundColor: pokeType.color }}
          onClick={() => {
            setSelectedType(pokeType.type);
            setSelectedName(null);
          }}
        >
          {pokeType.type}
        </button>
      ))}
    </>
  );
}

export default NavBar;