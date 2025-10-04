import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";

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
import Inicio from "./pages/Inicio";
import Form from "./pages/Form";

// Função para verificar se o usuário está logado
const isLoggedIn = () => !!localStorage.getItem("token");

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn() && window.location.pathname !== "/login") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      {/* Conteúdo principal */}
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Rotas protegidas */}
          <Route 
            path="/Form.jsx" 
            element={isLoggedIn() ? <Form /> : <Navigate to="/login" replace />} 
          />

          <Route
            path="/jogadoras"
            element={isLoggedIn() ? <Jogadoras /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/blog"
            element={isLoggedIn() ? <Blog /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/clubes"
            element={isLoggedIn() ? <Clubes /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/campeonatos"
            element={isLoggedIn() ? <Campeonatos /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/escolinhas"
            element={isLoggedIn() ? <Escolinhas /> : <Navigate to="/login" replace />}
          />

          {/* Página inicial */}
          <Route
            path="/"
            element={isLoggedIn() ? <Inicio /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
      
  );

}
