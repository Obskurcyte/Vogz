import React from 'react';

const HeaderMarque = () => {
    return (
        <div className="header-marque-container">
            <div className="img-marques-header-container">
                <img src={'/logo.png'} alt=""/>
            </div>
            <div className="links-container">
                <p className="links-text">Qui sommes-nous ?</p>
                <p className="links-text">Comment ça marche ?</p>
                <button className="brief-button-container">
                    <p>Déposer un brief</p>
                </button>
            </div>
        </div>
    );
};

export default HeaderMarque;