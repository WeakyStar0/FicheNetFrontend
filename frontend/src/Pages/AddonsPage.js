import React from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../addonPageStyles.css';

const loader = async ({ params }) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/add_on/jogo/${params.gameId}`);
    console.log('Resposta da API:', response);
    console.log('Add-ons:', response.data);

    return { addons: response.data };
  } catch (error) {
    console.error('Erro ao buscar dados dos add-ons:', error);
    return { addons: null };
  }
};

const AddonsPage = () => {
  const { addons } = useLoaderData();
  console.log(addons);
  if (!addons) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <hr className='line4' />
      <div className="background-text-container">
        <div className="scrolling-text">ADD-ONS</div>
      </div>
      <hr className='line5' />


      <div style={{ marginTop: '200px' }}>&nbsp;</div>
      <div className='addonspage'>
        <h4 className='addontitle'>ADD-ONS DISPONÍVEIS</h4>
        <hr className="line7" />
        <div className="containerAddons">
          {addons.length > 0 ? (
            addons.map((addon) => (
              <div key={addon.id_add_on} className="addonBox">
                <img className='addonimg' src={addon.imagem} alt={addon.titulo_add_on} />
                <div className="addon-info">
                  <div>
                    <b>Nome: </b>
                    {addon.titulo_add_on}
                  </div>
                  <div>
                    <b>Preço: </b>
                    {addon.preco_add_on}€
                  </div>
                  <button className="btn">COMPRAR ADD-ON</button>
                </div>
              </div>
            ))
          ) : (
            <div>Nenhum add-on disponível</div>
          )}
        </div>
      </div>
    </div>
  );
};

export { AddonsPage, loader };
