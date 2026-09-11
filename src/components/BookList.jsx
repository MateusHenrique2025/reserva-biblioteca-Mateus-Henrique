// BookList.jsx
// Componente responsável por renderizar a lista completa de livros.

// Importa o componente BookCard para renderizar cada item individualmente
import BookCard from "./BookCard";

// Recebe a prop 'books' (array de objetos de livros)
export default function BookList({ books }) {
  // Se a lista estiver vazia, exibe uma mensagem informativa
  if (books.length === 0) {
    return <p>Nenhum livro no acervo.</p>;
  }

  return (
    <section className="book-list" aria-label="Acervo">
      {/* 
        Percorre o array de livros usando .map()
        - A chave (key) é o ID único do livro, garantindo a performance do React.
        - Para cada livro, renderiza um <BookCard /> passando o objeto como prop.
      */}
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}