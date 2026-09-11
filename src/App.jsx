// App.jsx
// Componente principal que agora importa a lista de livros e o componente BookList.

import "./App.css";
// Importa os dados dos livros do arquivo books.js
import { books } from "./data/books";
// Importa o componente que renderiza a lista
import BookList from "./components/BookList";

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
      </header>

      {/* 
        Substitui os três cartões escritos à mão pelo componente BookList.
        Passa o array 'books' como prop para ser renderizado dinamicamente.
      */}
      <BookList books={books} />
    </main>
  );
}