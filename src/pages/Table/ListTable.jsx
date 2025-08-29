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
 <div className="container-cards">
      {instrumentos.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.nome}</h3>
          <p><strong>Categoria:</strong> {item.categoria}</p>
          <p><strong>Marca:</strong> {item.marca}</p>
          <p><strong>Preço:</strong> R$ {item.preco}</p>
        </div>
      ))}
    </div>
  );
}
