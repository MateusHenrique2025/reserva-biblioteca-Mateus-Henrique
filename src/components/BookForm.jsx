// BookForm.jsx
// Formulário controlado para cadastrar um novo livro.

import { useState } from "react";

// Recebe a prop 'onAdd' (função de callback que será chamada ao cadastrar)
export default function BookForm({ onAdd }) {
  // Estado único que guarda os valores dos dois campos (Título e Autor)
  const [form, setForm] = useState({ title: "", author: "" });
  // Estado que guarda a mensagem de erro (se houver)
  const [error, setError] = useState("");

  // Um único handleChange cuida dos dois campos.
  // Usa 'name' e chave calculada ([name]: value) para atualizar o campo correto.
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // Função chamada ao enviar o formulário
  function handleSubmit(event) {
    // Impede o comportamento padrão (recarregar a página)
    event.preventDefault();

    // Validação: se algum campo estiver vazio, mostra a mensagem e NÃO cadastra
    if (form.title.trim() === "" || form.author.trim() === "") {
      setError("Preencha o título e o autor.");
      return;
    }

    // Se estiver tudo certo, cria o novo livro com id gerado por crypto.randomUUID()
    const newBook = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      author: form.author.trim(),
      year: new Date().getFullYear(), // ano atual como padrão
      available: true,
    };

    // Chama a função recebida por prop, passando o novo livro
    onAdd(newBook);

    // Limpa os campos do formulário
    setForm({ title: "", author: "" });
    // Limpa a mensagem de erro
    setError("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      {/* Campo controlado: Título */}
      <div className="field">
        <label htmlFor="title">Título</label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="Ex.: Memórias Póstumas de Brás Cubas"
        />
      </div>

      {/* Campo controlado: Autor */}
      <div className="field">
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          name="author"
          type="text"
          value={form.author}
          onChange={handleChange}
          placeholder="Ex.: Machado de Assis"
        />
      </div>

      {/* Mensagem de erro (só aparece se 'error' não estiver vazia) */}
      {error && <p className="form-error">{error}</p>}

      {/* Botão de envio */}
      <button type="submit">Cadastrar livro</button>
    </form>
  );
}