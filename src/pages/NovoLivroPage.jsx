import BookForm from "../components/BookForm";
import Panel from "../components/Panel";

export default function NovoLivroPage() {
  return (
    <>
      <h2>Cadastrar novo livro</h2>
      <Panel title="Novo livro">
        <BookForm />
      </Panel>
    </>
  );
}