import React from "react";
import { Route, Switch, useLocation } from "wouter";

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";


// Páginas

import Jogadoras from "./pages/Jogadoras";
import Blog from "./pages/Blog";
import Clubes from "./pages/Clubes";
import Campeonatos from "./pages/Campeonatos";
import Escolinhas from "./pages/Escolinha";
import Inicio from "./pages/inicio";


// Função para verificar se o usuário está logado
const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export default function App() {
  const [, setLocation] = useLocation();

  // Se o usuário não estiver logado e tentar acessar qualquer rota protegida, redireciona para login
  React.useEffect(() => {
    if (!isLoggedIn() && window.location.pathname !== "/login") {
      setLocation("/login");
    }
  }, [setLocation]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          {/* Rotas protegidas */}
          <Route path="/jogadoras">
            {isLoggedIn() ? <Jogadoras /> : setLocation("/login")}
          </Route>
          <Route path="/blog">
            {isLoggedIn() ? <Blog /> : setLocation("/login")}
          </Route>
          <Route path="/clubes">
            {isLoggedIn() ? <Clubes /> : setLocation("/login")}
          </Route>
          <Route path="/campeonatos">
            {isLoggedIn() ? <Campeonatos /> : setLocation("/login")}
          </Route>
          <Route path="/escolinhas">
            {isLoggedIn() ? <Escolinhas /> : setLocation("/login")}
          </Route>

          {/* Página inicial */}
          <Route path="/">
            {isLoggedIn() ? <Inicio /> : setLocation("/login")}
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}
