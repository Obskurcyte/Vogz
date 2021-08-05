import React from 'react';
import Header from "../components/Header";
import HeaderMarque from "../components/HeaderMarque";

const CommentCaMarche = () => {

    return (
        <div>
            <HeaderMarque />
            <section className='flex comment-1'>
                <div className="no-pub">
                    <div className="text-comment">
                        <h2 className="pub-title">
                            Ne faites pas une pub : <br/>
                            <span className="vogz-light-blue">Faites une VOGZ</span>
                        </h2>
                        <p className="grey text-comment-para">Avec <span className="vogz grasBlue">VOGZ</span> toutes vos demandes de contenus sont <span className="highlight">cadrées, centralisées, négociées</span> et disponibles sur <span className="highlight">une seule plateforme</span> en ligne.
                        </p>
                        <button className="brief-button-container gros-brief">
                            <p>Déposer un brief</p>
                        </button>
                    </div>
                </div>

                <div className="light-blue-container">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <div className="logo-marche-container">
                        <img src={'/logo-marche.png'} alt=""/>
                    </div>
                </div>
            </section>

            <section className="comment-2">
                <div className="inner-title-comment-container">
                    <h2 className="inner-title title-comment">
                        VOGZ c’est la garantie d’obtenir du <span className="highlight-light-blue">contenu clés en main,</span> de manière <span className="highlight-light-blue">simple et rapide.</span> Comment ça marche ? Découvrez notre process en <span className="highlight-light-blue">4 étapes !</span>
                    </h2>
                </div>

                <div className="process-container">
                    <div className="flex-between process-inner-container">
                        <div className="inner-process flex-column">
                            <img src={'/Un.png'} alt=""/>
                            <h2>Faites votre brief, </h2> <br/>
                            <p className="grey">en répondant à un <span className="highlight">formulaire</span></p>
                        </div>

                        <img src={'/arrowCorner.png'} alt="" className="arrow-corner"/>
                        <div className="img-process-container">
                            <img src={'/computer.png'} alt=""/>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CommentCaMarche;