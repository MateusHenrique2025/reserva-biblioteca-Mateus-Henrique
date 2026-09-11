// App.jsx
// Agora o App guarda a lista de livros em estado com useState.

import { useState } from "react";
import "./App.css";
// Importa os dados iniciais dos livros
import { books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import Panel from "./components/Panel";

export default function App() {
  // Estado que guarda a lista de livros.
  // Começa com os dados do arquivo books.js.
  const [books, setBooks] = useState(initialBooks);

  // Alterna o campo 'available' do livro clicado.
  // A atualização é IMUTÁVEL: usamos .map() e espalhamos o objeto (...book).
  function handleReserve(bookId) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book
      )
    );
  }

  // Contador calculado (não guardado em outro estado).
  // Filtra os livros disponíveis e conta quantos são.
  const availableCount = books.filter((book) => book.available).length;

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>

        {/* Contador calculado no topo da página */}
        <p className="counter">
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>

      <Panel title="Acervo">
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}