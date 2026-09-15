import { createContext, useContext, useEffect, useState } from "react";
import { books as initialBooks } from "../data/books";

const STORAGE_KEY = "reserva-biblioteca:books";

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

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(loadBooks);

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
    <BooksContext.Provider
      value={{ books, availableCount, toggleBook, addBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

// Atalho opcional para consumir o contexto
export function useBooks() {
  const ctx = useContext(BooksContext);
  if (!ctx) throw new Error("useBooks deve ser usado dentro de BooksProvider");
  return ctx;
}