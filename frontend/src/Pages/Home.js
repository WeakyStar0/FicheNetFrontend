import React from 'react';
import GameDisplay from '../components/GameDisplay';

import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min';
import 'popper.js/dist/umd/popper.min';
import 'bootstrap/dist/js/bootstrap.min';


export const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide, slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://imgur.com/pSjVGrO.png" className="w-100" alt="Slide 1" />
                            <div className="carousel-caption">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdna.artstation.com/p/assets/images/images/033/037/886/large/artur-tarnowski-malemain.jpg" className="w-100" alt="Slide 2" />
                            <div className="carousel-caption">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://imgur.com/ps4UrkD.png" className="w-100" alt="Slide 3" />
                            <div className="carousel-caption">
                            </div>
                        </div>
                    </div>
                    <h1 className="sale">FICHENET<br />SALES</h1>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className='destaques' >DESTAQUES</div>

            <GameDisplay id={1} />
            <GameDisplay id={2} />
            <GameDisplay id={3} />
            <GameDisplay id={4} />

            <div style={{ height: '200px', paddingTop: '56px' }}>

            </div>
        </div>
    );
}