import React from 'react';

const HeaderMarque = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="img-marques-header-container">
                <img src={'/logo.png'} alt=""/>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link links-text" href="#">Qui sommes-nous ?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link links-text" href="#">Comment ça marche ?</a>
                    </li>
                    <li>
                        <button className="brief-button-container petit-brief">
                            <p>Déposer un brief</p>
                        </button>
                    </li>

                </ul>
            </div>

        </nav>
    );
};

export default HeaderMarque;