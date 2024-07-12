import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Compra = ({ id }) => {
  const [compra, setCompra] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompra = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/compra/usuario/${id}`);
        console.log('Dados da Compra:', response.data); // Log para depuração
        setCompra(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da compra:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCompra();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados da compra.</p>;
  }

  if (!compra) {
    return <p>Não foi possível carregar os dados da compra.</p>;
  }

  return (
    <div>
      <h2>Compra ID: {compra.id_compra}</h2>
      <p>Data da Compra: {new Date(compra.data_compra).toLocaleDateString()}</p>
      <p>Valor Total: {compra.total}</p>
      <p>Quantidade: {compra.quantidade}</p>
      <p>Preço unitário: {compra.preco_unitario}</p>
      <p>Frequência: {compra.frequencia}</p>
    </div>
  );
};

export default Compra;
