import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <>
      <h2>404 — Página não encontrada</h2>
      <p>O endereço que você tentou acessar não existe.</p>
      <Link to="/">Voltar para o acervo</Link>
    </>
  );
}