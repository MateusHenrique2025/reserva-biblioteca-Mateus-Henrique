// BookCard.jsx
// Agora o texto do botão muda conforme a situação do livro.

export default function BookCard({ book, onReserve }) {
  const { id, title, author, year, available } = book;

  return (
    <article className="book-card">
      <div>
        <h2>{title}</h2>
        <p>{author} — {year}</p>
      </div>

      <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
        {available ? "Disponível" : "Reservado"}
      </span>

      {/* 
        O texto do botão muda conforme 'available':
        - Se disponível, mostra "Reservar"
        - Se reservado, mostra "Devolver"
      */}
      <button onClick={() => onReserve(id)}>
        {available ? "Reservar" : "Devolver"}
      </button>
    </article>
  );
}