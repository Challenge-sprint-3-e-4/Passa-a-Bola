import React from "react";
import { Route } from "wouter";

// Importando o Header e Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importando as páginas
import Jogadoras from "./pages/Jogadoras";
import Blog from "./pages/Blog";
import Clubes from "./pages/Clubes";
import Campeonatos from "./pages/Campeonatos";
import Escolinhas from "./pages/Escolinha";

export default function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      {/* Header fixo em todas as páginas */}
      <Header />

      {/* Conteúdo das páginas */}
      <main className="flex-1">
        <Route path="/jogadoras" component={Jogadoras} />
        <Route path="/blog" component={Blog} />
        <Route path="/clubes" component={Clubes} />
        <Route path="/campeonatos" component={Campeonatos} />
        <Route path="/escolinhas" component={Escolinhas} />
      </main>

      {/* Footer exibido em todas as páginas */}
      <Footer />
    </div>
  );
}
