import { Sun, Moon } from "phosphor-react"
import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme.context"
import { ButtonContainer } from "./styles"

export function ButtonChangeTheme() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <ButtonContainer 
      theme={theme} 
      onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
    >

      {theme === themes.light ?
        <Moon className="moon" size={30} /> :
        <Sun className="sun" size={30} />
      }

    </ButtonContainer>
  )
}