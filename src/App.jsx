// App.jsx
// Agora o App também consegue adicionar novos livros à lista.

import { useState } from "react";
import "./App.css";
import { books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Panel from "./components/Panel";

export default function App() {
  // Estado que guarda a lista de livros
  const [books, setBooks] = useState(initialBooks);

  // Alterna o campo 'available' do livro clicado (atualização imutável)
  function handleReserve(bookId) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book
      )
    );
  }

  // Adiciona um novo livro ao final da lista (atualização imutável)
  function handleAddBook(newBook) {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  }

  // Contador calculado (não guardado em outro estado)
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

      {/* Painel com o formulário de cadastro, acima da lista */}
      <Panel title="Novo livro">
        <BookForm onAdd={handleAddBook} />
      </Panel>

      {/* Painel com a lista de livros */}
      <Panel title="Acervo">
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}