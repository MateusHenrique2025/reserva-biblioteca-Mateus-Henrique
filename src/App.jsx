import { NavLink, Route, Routes } from "react-router";
import AcervoPage from "./pages/AcervoPage";
import NovoLivroPage from "./pages/NovoLivroPage";
import SobrePage from "./pages/SobrePage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* Cabeçalho fixo — FORA do Routes */}
      <header className="app-header">
        <h1>Reserva da Biblioteca</h1>
        <nav>
          <NavLink to="/" end>
            Acervo
          </NavLink>
          <NavLink to="/novo">Novo livro</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </header>

      {/* Conteúdo que troca — DENTRO do Routes */}
      <main>
        <Routes>
          <Route path="/" element={<AcervoPage />} />
          <Route path="/novo" element={<NovoLivroPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}