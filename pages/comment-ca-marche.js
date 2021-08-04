import React from 'react';

const CommentCaMarche = () => {
    return (
        <div>
            <section className='flex'>
                <div className="no-pub">
                    <h2 className="pub-title">
                        Ne faites pas une pub : <br/>
                        <span className="vogz-light-blue">Faites une VOGZ</span>
                    </h2>
                    <p>Avec <span className="vogz">VOGZ</span> toutes vos demandes de contenus sont <span className="highlight">cadrées, centralisées, négociées</span> et disponibles sur <span className="highlight">une seule plateforme</span> en ligne.
                    </p>
                    <button className="brief-button-container gros-brief">
                        <p>Déposer un brief</p>
                    </button>
                </div>

                <div className="light-blue-container">

                </div>


            </section>

            <h2 className="inner-title">
                VOGZ c’est la garantie d’obtenir du <span className="highlight-light-blue">contenu clés en main,</span> de manière <span className="highlight-light-blue">simple et rapide.</span> Comment ça marche ? Découvrez notre process en <span className="highlight-light-blue">4 étapes !</span>
            </h2>
        </div>
    );
};

export default CommentCaMarche;