import { CardContainer } from "./styles";
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme.context"

export function CardPokemon({ name, gif, id, types }) {
  const { theme } = useContext(ThemeContext)

  return (
    <CardContainer theme={theme}>
      <div>
        <p>{name} </p> <span>#{id}</span>
      </div>

      <img src={gif} width={80}></img>

      <p className="types">
        {types.map((type,index) => {
          return (
            <span key={index}>
              {type.type.name}
            </span>
          )
        })}
      </p>

    </CardContainer>
  )
}