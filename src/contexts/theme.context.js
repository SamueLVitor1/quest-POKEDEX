import { createContext, useState } from "react";

export const themes = {
  light: {
    colorHeader: '#CBDFBD', 
    colorLogoPokemon: '#4A5DB5',
    colorText: '#000',
    background: '#eeeeee',
    iconLighDarkColor: '#172554',
    bgPokedex: '#d20a40',
  },

  dark: {
    colorHeader: '#2e1065', 
    colorLogoPokemon: '#94a3b8',
    colorText: '#fff',
    background: '#1B2223',
    iconLighDarkColor: '#f59e0b',
    bgPokedex: '#d20a40',
  }
}


export const ThemeContext = createContext({})
export const ThemeProvider = (props) =>{

  const [theme, setTheme ] = useState(themes.light)

  return(
    <ThemeContext.Provider value={{theme, setTheme}} >
      {props.children}
    </ThemeContext.Provider>
  )
}