import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Usuario = ({ id }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/usuario/jogo/${id}`);
        console.log('Dados do Usuario:', response.data); // Log para depuração
        setUsuario(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchUsuario();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados do usuário.</p>;
  }

  if (!usuario) {
    return <p>Não foi possível carregar os dados do usuário.</p>;
  }

  return (
    <div>
      <h2>{usuario.nome}</h2>
      <p>Email: {usuario.email}</p>
      <p>Senha: {usuario.senha}</p>
      <p>Tipo: {usuario.tipo}</p>
    </div>
  );
};

export default Usuario;
