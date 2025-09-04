import React from "react";
import { Route } from "wouter";

// Importando o Header
import Header from "./components/Header";

// Importando as páginas
import Jogadoras from "./pages/Jogadoras";
import Blog from "./pages/Blog";
import Clubes from "./pages/Clubes"
import Campeonatos from "./pages/Campeonatos";
import Escolinhas from "./pages/Escolinha";

export default function App() {
  return (
    <div className="App">
      {/* Header fixo em todas as páginas */}
      <Header />

      {/* Rotas */}
      <Route path="/jogadoras" component={Jogadoras} />
      <Route path="/blog" component={Blog} />
      <Route path="/clubes" component={Clubes} />
      <Route path="/campeonatos" component={Campeonatos} />
      <Route path="/escolinhas" component={Escolinhas} />
    </div>
    
  );
}
