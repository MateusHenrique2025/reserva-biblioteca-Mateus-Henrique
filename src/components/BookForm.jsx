import { useState } from "react";
import { useBooks } from "../context/BooksContext";

export default function BookForm() {
  const { addBook } = useBooks();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    addBook({ title, author });
    setTitle("");
    setAuthor("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Autor"
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}