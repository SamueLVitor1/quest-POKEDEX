import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { createPokemonItem } from "../../api/request_api"
import { Header } from "../../components/Header"
import { Container, ContainerPokemonDescription } from "./styles"
import { ThemeContext } from "../../contexts/theme.context"
import { House } from "phosphor-react"

export function PokemonDescription() {
  const { theme } = useContext(ThemeContext)
  const { nameID } = useParams()
  const [pokemon, setPokemon] = useState([])
  const [imgPokemon, setImgPokemon] = useState('')
  const [moves, setMovesPokemon] = useState([])
  const [pokemonUrl, setPokemonUrl] = useState([])
  const [resultPokemonAbility, setResultPokemonAbility] = useState([])
  const [descriptionPokemonUrl, setDescriptionPokemonUrl] = useState('')
  const [descriptionPokemon, setDescriptionPokemon] = useState('')

  useEffect(() => {
    const chamadaApi = async () => {
      const data = await createPokemonItem(nameID);
      setPokemon(data)
      setImgPokemon(data.sprites.front_default)
      setMovesPokemon(data.moves.slice(0, 25))
      setPokemonUrl(data.abilities)
      setDescriptionPokemonUrl(data.species.url)
    }
    chamadaApi()
  }, [nameID])

  useEffect(() => {
    async function fetchDescription () {
      const response = await fetch(descriptionPokemonUrl).then(response => response.json())
      const descriptionText = response.flavor_text_entries.find(propertyes => propertyes.language.name === 'en').flavor_text.replace(/\f/g, '')
      setDescriptionPokemon(descriptionText)
    }
    
    fetchDescription()
  })



  useEffect(() => {
    const chamadaAbilitiesPokemon = async () => {
      const urlsAbilitiesPokemon = pokemonUrl.map(async (ability) => {
        const response = await fetch(ability.ability.url)

        const urlJson = await response.json()
        return urlJson;
      })

      const resultAbilityApi = await Promise.all(urlsAbilitiesPokemon);
      setResultPokemonAbility(resultAbilityApi)
    }

    chamadaAbilitiesPokemon()
  }, [pokemon])

  return (

    <Container theme={theme}>
      <Header />
      <div>
        <ContainerPokemonDescription theme={theme}>
          <div>
            <h2>{pokemon.name}</h2>

            <img src={imgPokemon} />

            <p style={{textAlign: "center"}}>{descriptionPokemon}</p>
          </div>

          <div>
            <h3>Moves :</h3>
            <div>
              {moves.map((move, index) => {
                return (
                  <span key={index}>
                    {move.move.name}
                  </span>
                )
              })}
            </div>
          </div>

          <div>
            <h3>Abilities</h3>

            {resultPokemonAbility.map((ability, index) => {
              return (
                <div key={index}>
                  <span>
                    {ability.name}
                  </span>
                  <p>
                    "{ability.flavor_text_entries[0].flavor_text}"
                  </p>
                </div>
              )
            })}

          </div>
        </ContainerPokemonDescription>
      </div>
    </Container>
  )
}