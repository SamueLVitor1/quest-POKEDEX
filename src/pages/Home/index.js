import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/theme.context"
import { Header } from "../../components/Header";
import { Container, PokedexContainer } from "./styles";
import { CardPokemon } from "../../components/CardPokemon";
import { createListPokemon } from "../../api/request_api";
import { Link } from "react-router-dom";

export function Home() {

  const { theme } = useContext(ThemeContext)
  const [pokemonsApi, setPokemonsApi] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [limitePokemons, setLimitePokemons] = useState(10)
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [searchPokemon, setSearchPokemon] = useState('')

  useEffect(() => {
    const chamadaApi = async () => {
      const data = await createListPokemon(limitePokemons);
      setPokemonsApi(data.results);

      const pokemonUrls = data.results.map((pokemonResult) => pokemonResult.url);
      setPokemons(pokemonUrls);

    }
    chamadaApi()
  }, [limitePokemons])

  useEffect(() => {
    const chamadaApiPokemon = async () => {
      const response = await Promise.all(
        pokemons.map(pokemon => fetch(pokemon).then(response => response.json()))
      )
      setPokemonDetails([response])
    }

    chamadaApiPokemon()
  }, [pokemons])

  const handleLimit = () => {
    setLimitePokemons(limitePokemons + 10)
  }

  let listPokemonSearch;
  if (pokemonDetails.length !== 0) {
    listPokemonSearch = pokemonDetails[0].filter(pokemon => pokemon.name.includes(searchPokemon))
  }
  console.log(pokemons)

  return (
    <>
      <Container theme={theme}>
        <Header />
        <PokedexContainer theme={theme} >

          <input
            type="text"
            placeholder="pesquisar pokemon"
            onChange={e => setSearchPokemon(e.target.value)}
            value={searchPokemon}
          />

          <ul>
            {searchPokemon === '' ?
              pokemonDetails.length !== 0 ? pokemonDetails[0].map((pokemon, index) => {
                return (
                  <Link key={index} to={`/pokemon/description/${pokemon.name}`} style={{textDecoration: "none"}}>
                    <CardPokemon
  
                      id={pokemon.id}
                      name={pokemon.name}

                      
                      gif={pokemon.sprites.front_default}
                      types={pokemon.types}
                    />
                  </Link>
                )
              }) : null
              :

              listPokemonSearch.length !== 0 ? listPokemonSearch.map((pokemon, index) => {
                return (
                  <Link to={`/pokemon/description/${pokemon.name}`} style={{textDecoration: "none"}}>
                  <CardPokemon
                    key={index}
                    id={pokemon.id}
                    name={pokemon.name}
                    gif={pokemon.sprites.front_default}
                    types={pokemon.types}
                  />
                 </Link> 
                )
              }) : null
            }

          </ul>

          <button style={{ height: "30px" }} onClick={handleLimit}>ver mais pokemon</button>
        </PokedexContainer>
      </Container>

    </>
  )
}