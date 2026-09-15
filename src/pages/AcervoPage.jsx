import BookList from "../components/BookList";
import Panel from "../components/Panel";
import { useBooks } from "../context/BooksContext";

export default function AcervoPage() {
  const { availableCount, books } = useBooks();

  return (
    <>
      <header className="page-header">
        <h2>Acervo</h2>
        <p>
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>
      <Panel title="Livros">
        <BookList />
      </Panel>
    </>
  );
}