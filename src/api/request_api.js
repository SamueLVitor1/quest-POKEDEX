export const createListPokemon = async (numberOfPokemons) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${numberOfPokemons}`);
  const pokemonList = await response.json()
  return pokemonList;
}

export const createPokemonItem = async(namePokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
  const pokemon = await response.json()
  return pokemon;
}

