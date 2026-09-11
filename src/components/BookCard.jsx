// BookCard.jsx
// Componente responsável por renderizar o cartão de um único livro.
// Agora recebe também 'onReserve' como callback.

// Recebe as props com desestruturação na assinatura:
// - book: objeto com os dados do livro
// - onReserve: função de callback que recebe o id do livro
export default function BookCard({ book, onReserve }) {
  // Desestrutura as propriedades do livro para facilitar o uso
  const { id, title, author, year, available } = book;

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

      {/* 
        Botão de reserva.
        Ao clicar, chama a função 'onReserve' recebida por prop,
        passando o 'id' do livro como argumento.
      */}
      <button onClick={() => onReserve(id)}>
        Reservar
      </button>
    </article>
  );
}