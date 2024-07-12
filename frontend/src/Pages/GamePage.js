import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData, Link } from 'react-router-dom';
import $ from 'jquery';
import { Helmet } from 'react-helmet';

import '../gamePageStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const loader = async ({ params }) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/jogo/compra/${params.gameId}`);
    console.log('Dados do Jogo:', response.data);
    return { game: response.data };
  } catch (error) {
    console.error('Erro ao buscar dados do jogo:', error);
    return { game: null };
  }
};

const GamePage = () => {
  const { game } = useLoaderData();
  const [currentImage, setCurrentImage] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');

  useEffect(() => {
    if (game && game.ytLink) {
      setCurrentVideo(game.ytLink);
    }
  }, [game]);

  useEffect(() => {
    setIframeAspectRatio();
    window.addEventListener('resize', setIframeAspectRatio); // Adiciona evento de resize
    return () => {
      window.removeEventListener('resize', setIframeAspectRatio); // Remove o evento de resize ao desmontar o componente
    };
  }, [currentImage, currentVideo]);

  const setIframeAspectRatio = () => {
    const aspectRatio = 16 / 9;
    $('#mainFrame').css('height', `${$('#mainFrame').width() / aspectRatio}px`);
  };

  if (!game) {
    return <div>Loading...</div>;
  }

  const showImage = (imageUrl) => {
    setCurrentImage(imageUrl);
    setCurrentVideo('');
  };

  const showVideo = (videoId) => {
    setCurrentVideo(videoId);
    setCurrentImage('');
  };

  return (
    <div>
      <Helmet>
        <title>{game.titulo_jogo} na FicheNet</title>
      </Helmet>

      <hr className='line4' />
      <div className="background-text-container">
        <div className="scrolling-text">{game.titulo_jogo}</div>
      </div>
      <hr className='line5' />

      <img className='wave' src='https://imgur.com/XoxZWDf.png' alt=''></img>
      <img className='wave2' src='https://imgur.com/XoxZWDf.png' alt=''></img>

      <div style={{ height: '75px' }}></div>

      <div className="container">
        <div className="left-container">

          <h4>{game.titulo_jogo}</h4>
          <hr className="line1" />

          <div className="frame edge" id="mainContent">
            {currentImage && (
              <img className="edge" id="mainImage" src={currentImage} alt="" />
            )}
            {currentVideo && (
              <iframe title='Trailer'
                className="edge"
                id="mainFrame"
                width="100%"
                height="100%"
                frameBorder="0"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
              ></iframe>
            )}
          </div>
          <div className="thumbnails">
            <img id="bounce"
              src={game.videoThumbnail}
              alt="Thumbnail 0"
              onClick={() => showVideo(game.ytLink)}
            />
            <img id="bounce"
              src={game.Thumbnail1}
              alt="Thumbnail 1"
              onClick={() => showImage(game.Thumbnail1)}
            />
            <img id="bounce"
              src={game.Thumbnail2}
              alt="Thumbnail 2"
              onClick={() => showImage(game.Thumbnail2)}
            />
            <img id="bounce"
              src={game.Thumbnail3}
              alt="Thumbnail 3"
              onClick={() => showImage(game.Thumbnail3)}
            />
            <img id="bounce"
              src={game.Thumbnail4}
              alt="Thumbnail 4"
              onClick={() => showImage(game.Thumbnail4)}
            />
          </div>

          <h4>ACERCA DESTE JOGO</h4>
          <hr className="line1" />

          <p className="gamedesc">{game.descricao_jogo}</p>
          <hr className="line1" />

          <h4>CONTEÚDO ADICIONAL</h4>

          <Link to={`/addon/${game.id_jogo}`}>
            <button className="btnaddon">Ver Add-ons</button>
          </Link>
        </div>

        <div className="right-container">
          <img src={game.LogoPng} alt={game.titulo_jogo} />
          <button className="btn">COMPRAR AGORA</button>
          <button className="btn">ADICIONAR AO CARRINHO</button>
          <div className="price">{game.preco_jogo}€</div>
          <div className="basegame">JOGO BASE</div>
          <button className="btn btn-wishlist">ADICIONAR À LISTA DE DESEJOS</button>
          <hr />
          <div className="gameinfo">
            <b>Titulo: </b>
            {game.titulo_jogo}
          </div>
          <div className="gameinfo">
            <b>Género: </b>
            {game.categoria}
          </div>
          <div className="gameinfo">
            <b>Desenvolvedora: </b>
            {game.desenvolvedora}
          </div>
          <div className="gameinfo">
            <b>Distribuidora: </b>
            {game.distribuidora}
          </div>
        </div>
      </div>

      <div className='halftone' />

    </div>
  );
};

export { GamePage, loader };
