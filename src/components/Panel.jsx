// Panel.jsx
// Componente de composição que envolve a lista em um painel com título.
// Recebe 'title' e 'children' como props.

export default function Panel({ title, children }) {
  return (
    <section className="panel">
      {/* Cabeçalho do painel com o título recebido */}
      <header className="panel-header">
        <h2>{title}</h2>
      </header>

      {/* Conteúdo do painel — aqui entra o que for passado como children */}
      <div className="panel-content">
        {children}
      </div>
    </section>
  );
}