import "./ListCard.css";
import { useGetInstruments } from "../../hooks/useGetInstruments";

export function Cards() {
    const {data: instrumentos, loading, error}= useGetInstruments();

  if (loading) return <p>Carregando instrumentos...</p>;
  if (error) return <p>Erro: {error}</p>;

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