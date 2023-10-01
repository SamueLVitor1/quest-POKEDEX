import { ThemeProvider } from './contexts/theme.context'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/globalStyle';


export function App() {
  return (
    <ThemeProvider >
      <BrowserRouter >
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

