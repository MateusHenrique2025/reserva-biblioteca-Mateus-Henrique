// BookList.jsx
// Componente responsável por renderizar a lista completa de livros.
// BookList NÃO decide nada — apenas encaminha a função recebida.

import BookCard from "./BookCard";

// Recebe as props:
// - books: array de objetos de livros
// - onReserve: função de callback que veio do App
export default function BookList({ books, onReserve }) {
  // Se a lista estiver vazia, exibe uma mensagem informativa
  if (books.length === 0) {
    return <p>Nenhum livro no acervo.</p>;
  }

  return (
    <section className="book-list" aria-label="Acervo">
      {/* 
        Percorre o array de livros usando .map()
        - A chave (key) é o ID único do livro.
        - Encaminha 'onReserve' para cada BookCard (não decide nada, só repassa).
      */}
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} 
          onReserve={onReserve} 
        />
      ))}
    </section>
  );
}