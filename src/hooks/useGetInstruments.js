import { useEffect, useState } from "react";

export function useGetInstruments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInstruments() {
      try {
        const response = await fetch("http://localhost:3000/equipamentos");
        if (!response.ok) {
          throw new Error("Erro ao buscar instrumentos");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchInstruments();
  }, []);

  return { data, loading, error };
}
