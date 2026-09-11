// BookCard.jsx
// Componente responsável por renderizar o cartão de um único livro.

// Recebe a prop 'book' (objeto com os dados do livro)
export default function BookCard({ book }) {
  // Desestrutura as propriedades do livro para facilitar o uso
  const { title, author, year, available } = book;

  return (
    <article className="book-card">
      <div>
        {/* Título do livro */}
        <h2>{title}</h2>
        {/* Autor e ano de publicação */}
        <p>{author} — {year}</p>
      </div>

      {/* 
        Etiqueta de status (Disponível/Reservado)
        Usa template string para definir a classe CSS dinamicamente:
        - 'badge-ok' se disponível
        - 'badge-off' se reservado
      */}
      <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
        {available ? "Disponível" : "Reservado"}
      </span>
    </article>
  );
}