import { useBooks } from "../context/BooksContext";

export default function BookList() {
  const { books, toggleBook } = useBooks();

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <span>
            {book.title} — {book.author}
          </span>
          <button onClick={() => toggleBook(book.id)}>
            {book.reserved ? "Devolver" : "Reservar"}
          </button>
        </li>
      ))}
    </ul>
  );
}