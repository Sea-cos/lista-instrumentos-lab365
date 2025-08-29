import { useEffect, useState } from "react";
import "./ListTable.css";

export function Table() {
  const [instrumentos, setInstrumentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchInstrumentos() {
      try {
        const resposta = await fetch("http://localhost:3000/equipamentos");
        if (!resposta.ok) {
          throw new Error("Erro ao buscar instrumentos");
        }
        const dados = await resposta.json();
        setInstrumentos(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchInstrumentos();
  }, []);

  if (loading) return <p>Carregando instrumentos...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Instrumentos</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Preço (R$)</th>
            <th>Ativo</th>
            <th>Voltagem</th>
            <th>Peso (kg)</th>
          </tr>
        </thead>
        <tbody>
          {instrumentos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.tipo}</td>
              <td>{item.marca}</td>
              <td>{item.ano}</td>
              <td>{item.preco}</td>
              <td>{item.ativo ? "Sim" : "Não"}</td>
              <td>{item.voltagem}</td>
              <td>{item.peso_kg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}
