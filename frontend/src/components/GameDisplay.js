import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../gamestyle.css';
import { Link } from 'react-router-dom';

const GameDisplay = ({ id }) => {
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
        <div className="container-centered">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link to={'/game/' + id}>
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
                </div>
            </div>
        </div>
    );
};

export default GameDisplay;
