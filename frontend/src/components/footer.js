import React from 'react';
import '../footerstyle.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white py-4">
                <div className="footer-container">
                    <img className='footerlogo' src='https://imgur.com/eRf7rtL.png' alt='FicheNet Logo'></img>
                    <div className="footer-row">
                        <div className="footer-social-icons d-flex justify-content-center">
                            <span className="footer-icon mx-3"><a href="#"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></span>
                            <span className="footer-icon mx-3"><a href="#"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></span>
                            <span className="footer-icon mx-3"><a href="#"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></span>
                            <span className="footer-icon mx-3"><a href="#"><i className="fa fa-youtube-square fa-2x" aria-hidden="true"></i></a></span>
                            <span className="footer-icon mx-3"><a href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></span>
                            <span className="footer-icon mx-3"><a href="#"><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i></a></span>
                        </div>
                    </div>

                    <div className="footer-row footer-links mt-3">
                        <div className="footer-link text-center">
                            <a href="#" className="text">SOBRE NÓS</a>
                        </div>
                        <div className="footer-link text-center">
                            <a href="#" className="text">TERMOS LEGAIS</a>
                        </div>
                        <div className="footer-link text-center">
                            <a href="#" className="text">AJUDA</a>
                        </div>
                        <div className="footer-link text-center">
                            <a href="#" className="text">POLÍTICA DE PRIVACIDADE</a>
                        </div>
                    </div>
                    <div className="footer-row mt-3">
                        <div className="footer-copyright col-md-12 text-center">
                            <small className='smallinfo'>© 2024 FICHENET CORPORATION. Todos os direitos reservados. Todas as marcas comerciais são propriedade dos respetivos proprietários EM PORTUGAL e outros países.</small>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
