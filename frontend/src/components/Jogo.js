import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jogo = ({ id }) => {
  const [jogo, setJogo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJogo = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/jogo/compra/${id}`);
        console.log('Dados do Jogo:', response.data); // Log para depuração
        setJogo(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados do jogo:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchJogo();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados do jogo.</p>;
  }

  if (!jogo) {
    return <p>Não foi possível carregar os dados do jogo.</p>;
  }

  return (
    <div>
      <h2>{jogo.titulo_jogo}</h2>
      <p>Descrição: {jogo.descricao_jogo}</p>
      <p>Preço: {jogo.preco_jogo}</p>
      <p>Data de Lançamento: {new Date(jogo.data_de_lancamento).toLocaleDateString()}</p>
      <p>Desenvolvedora: {jogo.desenvolvedora}</p>
      <p>Distribuidora: {jogo.distribuidora}</p>
      <p>Categoria: {jogo.categoria}</p>
      <p>Versão: {jogo.versao_jogo}</p>
      <img src={jogo.logo} alt={jogo.titulo_jogo} />
    </div>
  );
};

export default Jogo;
