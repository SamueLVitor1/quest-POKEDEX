
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%; 
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  html, body {
  height: 100%;
  }

  ul{
    list-style: none;
  }

  body, textarea, button, input{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
` 