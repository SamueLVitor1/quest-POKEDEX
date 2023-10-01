
import { HeaderContainer } from "./styles";
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme.context"
import { ButtonChangeTheme } from "../ButtonChangeTheme";
import { Link } from "react-router-dom";


export function Header() {
  const { theme } = useContext(ThemeContext)

  return (
    <HeaderContainer theme={theme}>
      <Link to={'/'} style={{ textDecoration: "none" }}>
        <h2> POKEDEX </h2>
      </Link>

      <ButtonChangeTheme />
    </HeaderContainer>
  )
} 