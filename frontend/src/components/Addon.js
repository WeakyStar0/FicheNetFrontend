import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Addon = ({ id }) => {
  const [addon, setAddon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddon = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/add_on/jogo/${id}`);
        console.log('Dados do Addon:', response.data); // Log para depuração
        setAddon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados do add-on:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchAddon();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados do add-on.</p>;
  }

  if (!addon) {
    return <p>Não foi possível carregar os dados do add-on.</p>;
  }

  return (
    <div>
      <h2>{addon.titulo_add_on}</h2>
      <p>Descrição: {addon.descricao_add_on}</p>
      <p>Preço: {addon.preco_add_on}</p>
      <p>Versão: {addon.versao_add_on}</p>
      <img src={addon.imagem} alt={addon.titulo_add_on} />
      
    </div>
  );
};

export default Addon;
