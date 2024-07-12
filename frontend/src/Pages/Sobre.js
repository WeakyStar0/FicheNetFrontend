import React, { useState } from 'react';
import '../aboutStyles.css';
import { Helmet } from 'react-helmet';

const teamMembers = [
    {
        nome: "Marcelo Dias",
        cargo: "Desenvolvedor Full-stack",
        info: "Marcelo é um desenvolvedor full stack, criando aplicações web completas com expertise tanto no front-end quanto no back-end.",
        image: "https://imgur.com/YoTcJyL.png"
    },
    {
        nome: "João Paulo Santos",
        cargo: "Analista de Dados",
        info: "João é um analista de dados, responsável por interpretar e analisar conjuntos de dados complexos para extrair insights e informação que suportem decisões estratégicas e operacionais nas organizações.",
        image: "https://imgur.com/o1lUjjB.png"
    },
    {
        nome: "Francisco Fernandes",
        cargo: "Desenvolvedor backend",
        info: "Francisco é um desenvolvedor de backend, responsável por implementar a lógica e a funcionalidade das aplicações web e sistemas, lidando com o processamento de dados e a integração com a Base de Dados.",
        image: "https://imgur.com/kjBiPVV.png"
    },
    {
        nome: "Rafael Nogueira",
        cargo: "Designer UI",
        info: "Rafael é um desenvolvedor de UI, responsável por implementar a interface visual de aplicações, garantindo uma experiência de usuário intuitiva e eficiente.",
        image: "https://imgur.com/wI6LAQe.png"
    },
    {
        nome: "Rúben Campos",
        cargo: "Desenvolvedor UX",
        info: "Rúben é um UX developer, responsável por criar interfaces de utilizador intuitivas e eficientes, combinando princípios de design e funcionalidade técnica para melhorar a experiência do utilizador.",
        image: "https://imgur.com/Km7bXEc.png"
    }
];

const Sobre = () => {
    const [activeMember, setActiveMember] = useState(null);

    const handleMemberClick = (index) => {
        setActiveMember(index === activeMember ? null : index);
    };

    return (
        <div>
            <Helmet>
                <title>FicheNet - Sobre</title>
            </Helmet>

            <hr className='line4' />
            <div className="background-text-container">
                <div className="scrolling-text">EQUIPA FICHE</div>
            </div>
            <hr className='line5' />

            <img className='pexe-cinza' src='https://imgur.com/E2H1RrA.png' alt=''></img>
            <img className='wave' src='https://imgur.com/XoxZWDf.png' alt=''></img>
            <img className='wave2' src='https://imgur.com/XoxZWDf.png' alt=''></img>

            <div className='aboutpage'>
                <div className="containerinfo mt-4 text-center">
                    <div className='left-container2'>
                        <div className='pexes'>
                            <img className="pexe1" alt="" src='https://imgur.com/nwEHKMd.png'></img>
                        </div>
                    </div>

                    <div className='right-container2'>
                        <div className="accordion">
                            {teamMembers.map((member, index) => (
                                <div className="accordion-item" key={index}>
                                    <button className="accordion-button" onClick={() => handleMemberClick(index)}>
                                        <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{member.nome}</span> - <span style={{ fontStyle: 'italic' }}>{member.cargo}</span>
                                    </button>
                                    <div className={`accordion-content ${activeMember === index ? 'open' : ''}`}>
                                        <div style={{ height: '10px' }} />
                                        <img src={member.image} alt={member.nome} className="member-image" />
                                        <p className='memberinfo'>{member.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='halftone' />

        </div>
    );
};

export default Sobre;
