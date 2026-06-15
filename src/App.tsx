import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

const pokemonList = [
  { name: "Bulbasaur",  
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",  
    bgColor: "lightgreen", 
    type: "Grass" 
  },
  { name: "Herbizarre",  
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",  
    bgColor: "lightgreen", 
    type: "Grass" 
  },
  { name: "Florizarre",  
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",  
    bgColor: "lightgreen", 
    type: "Grass" 
  },
  { name: "Charmander", 
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",  
    bgColor: "orange",     
    type: "Fire" 
  },
    { name: "Reptincel", 
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",  
    bgColor: "orange",     
    type: "Fire" 
  },
    { name: "Charizard", 
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",  
    bgColor: "orange",     
    type: "Fire" 
  },
  { name: "Squirtle",   
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",  
    bgColor: "lightblue",  
    type: "Water" 
  },
    { name: "Carabaffe",   
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",  
    bgColor: "lightblue",  
    type: "Water" 
  },
    { name: "Blastoise",   
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",  
    bgColor: "lightblue",  
    type: "Water" 
  },
  { name: "Pikachu",    
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", 
    bgColor: "yellow",     
    type: "Electric" 
  },
  { name: "Mew",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",                                                                                                                           
    bgColor: "pink",     
    type: "Psychic" 
  },
];

const pokemonTypes = [
  { type: "Grass",    color: "#78C850" },
  { type: "Fire",     color: "#F08030" },
  { type: "Water",    color: "#6890F0" },
  { type: "Electric", color: "#F8D030" },
  { type: "Psychic",  color: "#F85888" },
  { type: "Normal",   color: "#A8A878" },
];

function App() {
  const [selectedType, setSelectedType] = useState<string | null>(null); // string ou null (valeur de base)
  const [selectedName, setSelectedName] = useState<string | null>(null);

    useEffect (
    () => {
      alert("Saccharomyces cerevisiae, ça veut dire Levure de boulanger en latin");
    },
    []
  );

  const filteredPokemon = selectedName
    ? pokemonList.filter((pok) => pok.name === selectedName)  //si selctedName existe, garde le nom du pokémon
    : selectedType                                            
    ? pokemonList.filter((pok) => pok.type === selectedType) // sinon si selectedType existe, garde les poké de ce type
    : pokemonList;                                            // sinon retourne toute la liste

return (
  <div className="app">
    <NavBar
      pokemonList={pokemonList}
      pokemonTypes={pokemonTypes}
      setSelectedName={setSelectedName}
      setSelectedType={setSelectedType}
    />
    {filteredPokemon.map((pokemon) => (
      <PokemonCard key={pokemon.name} pokemon={pokemon} />
    ))}
  </div>
);
}

export default App;