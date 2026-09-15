import { useEffect, useState } from "react";
import { books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Panel from "./components/Panel";
import "./App.css";

// 🔑 Chave do armazenamento — FORA do componente
const STORAGE_KEY = "reserva-biblioteca:books";

// 📥 Função de carga — FORA do componente
function loadBooks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return initialBooks;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : initialBooks;
  } catch (error) {
    console.error("Erro ao carregar livros:", error);
    return initialBooks;
  }
}

export default function App() {
  // ✅ Inicialização preguiçosa: passa a FUNÇÃO, sem parênteses
  const [books, setBooks] = useState(loadBooks);

  // 💾 Sempre que books mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  function toggleBook(id) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, reserved: !book.reserved } : book
      )
    );
  }

  function addBook(newBook) {
    setBooks((prev) => [
      ...prev,
      { ...newBook, id: crypto.randomUUID(), reserved: false },
    ]);
  }

  const availableCount = books.filter((b) => !b.reserved).length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Reserva da Biblioteca</h1>
        <p>
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>

      <main>
        <Panel title="Acervo">
          <BookList books={books} onToggle={toggleBook} />
        </Panel>

        <Panel title="Cadastrar novo livro">
          <BookForm onAdd={addBook} />
        </Panel>
      </main>
    </div>
  );
}