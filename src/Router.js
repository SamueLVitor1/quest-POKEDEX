import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { PokemonDescription } from "./pages/PokemonDescription"


export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/description/:nameID" element={<PokemonDescription />} />
    </Routes>
  )
}