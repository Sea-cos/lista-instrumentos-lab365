import "./ListTable.css";
import { useGetInstruments } from "../../hooks/useGetInstruments";

export function Table() {
    const { data: instrumentos, loading, error } = useGetInstruments();

  if (loading) return <p>Carregando instrumentos...</p>;
  if (error) return <p>Erro: {error}</p>;

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
