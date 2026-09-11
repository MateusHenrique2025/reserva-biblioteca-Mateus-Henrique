// App.jsx
// Componente principal que agora contém a lógica de reserva.

import "./App.css";
// Importa os dados dos livros do arquivo books.js
import { books } from "./data/books";
// Importa o componente que renderiza a lista
import BookList from "./components/BookList";
// Importa o componente de composição Panel
import Panel from "./components/Panel";

export default function App() {
  // A função de verdade mora no App.
  // Por enquanto, apenas mostra um alerta com o id do livro.
  // Na Etapa 4 ela vira a ação de verdade.
  function handleReserve(bookId) {
    window.alert(`Livro ${bookId} — ação ainda não implementada`);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
      </header>

      {/* 
        Envolve a lista em um Panel com título.
        O BookList é passado como children do Panel.
        A função handleReserve é passada como prop para o BookList,
        que por sua vez repassa para cada BookCard.
      */}
      <Panel title="Acervo">
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}