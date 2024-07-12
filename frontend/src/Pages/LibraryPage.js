import axios from 'axios';
import { useLoaderData, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../libraryPageStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const loader = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/jogos');
    console.log('Lista de Jogos:', response.data);
    return { games: response.data };
  } catch (error) {
    console.error('Erro ao buscar lista de jogos:', error);
    return { games: [] };
  }
};

const LibraryPage = () => {
  const { games } = useLoaderData();

  if (!games.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Biblioteca de Jogos na FicheNet</title>
      </Helmet>

      <div className="container">
        <div className="library-grid">
          {games.map((game) => (
            <div key={game.id_jogo} className="game-card">
              <Link to={`/game/${game.id_jogo}`}>
                <img src={game.Thumbnail1} alt={game.titulo_jogo} className="game-thumbnail" />
                <div className="game-info">
                  <h5>{game.titulo_jogo}</h5>
                  <p>{game.preco_jogo}€</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { LibraryPage, loader };
