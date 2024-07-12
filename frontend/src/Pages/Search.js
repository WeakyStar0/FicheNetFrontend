import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../gamestyle.css'; // Importe seus estilos CSS aqui
import { Link } from 'react-router-dom';

const Search = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
  const [jogosFiltrados, setJogosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        // Substitua pela sua URL real para buscar categorias
        const response = await axios.get('http://localhost:3001/api/categorias');
        console.log('Categorias:', response.data); // Log para depuração
        setCategorias(response.data); // Armazena as categorias no estado
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  const handleCategoriaChange = (categoria) => {
    // Adiciona ou remove a categoria selecionada
    if (categoriaSelecionada.includes(categoria)) {
      setCategoriaSelecionada(categoriaSelecionada.filter(cat => cat !== categoria));
    } else {
      setCategoriaSelecionada([...categoriaSelecionada, categoria]);
    }
  };

  useEffect(() => {
    // Filtra os jogos baseado nas categorias selecionadas
    const fetchJogosFiltrados = async () => {
      try {
        // Substitua pela sua URL real para buscar jogos filtrados
        const response = await axios.post('http://localhost:3001/api/jogo/filtrar', {
          categorias: categoriaSelecionada
        });
        console.log('Jogos filtrados:', response.data); // Log para depuração
        setJogosFiltrados(response.data); // Armazena os jogos filtrados no estado
      } catch (error) {
        console.error('Erro ao buscar jogos filtrados:', error);
        setError(error);
      }
    };

    // Verifica se há categorias selecionadas para fazer o filtro
    if (categoriaSelecionada.length > 0) {
      fetchJogosFiltrados();
    } else {
      // Caso não haja categorias selecionadas, mostra todos os jogos
      setJogosFiltrados([]);
    }
  }, [categoriaSelecionada]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados.</p>;
  }

  return (
    <div>
      <h2>Selecione Categorias:</h2>
      <div>
        {categorias.map(categoria => (
          <label key={categoria.id}>
            <input
              type="checkbox"
              value={categoria.nome}
              checked={categoriaSelecionada.includes(categoria.nome)}
              onChange={() => handleCategoriaChange(categoria.nome)}
            />
            {categoria.nome}
          </label>
        ))}
      </div>

      <h2>Jogos Filtrados:</h2>
      <div className="container">
        <div className="row">
          {jogosFiltrados.length > 0 ? (
            jogosFiltrados.map(jogo => (
              <div className="col-md-6" key={jogo.id}>
                <Link to={`/game/${jogo.id}`}>
                  <div className="game-container">
                    <img src={jogo.logo} alt="" className="game-img" />
                    <div className="game-details jogo">
                      <div className="game-title">{jogo.titulo_jogo}</div>
                      <div className="game-genre">{jogo.categoria}</div>
                      <div className="game-desc">{jogo.descricao_jogo}</div>
                    </div>
                    <div className="price-tag">
                      <div className="game-price">
                        {jogo.preco_jogo}€
                        <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Nenhum jogo encontrado com as categorias selecionadas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
