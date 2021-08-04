import React from 'react';
import HeaderMarque from "../components/HeaderMarque";
import ReactPlayer from "react-player";
import PurpleButton from "../components/PurpleButton";
import Footer from "../components/Footer";

const Marques = () => {
    return (
        <div>
            <HeaderMarque />
            <div className="part1-marque">
                <img src={'/listePortrait.png'} alt=""/>
                <div className="block-1">
                    <h1>Authenticité, <br/> Créativité, <br/>Efficacité.</h1>
                    <p className="auth-text">Avec <span className="vogz grasBlue">VOGZ</span> profitez d'une sélection de <span className="vogz grasBlue">Vogzter</span> capable de réaliser pour vous, <span className="highlight">une vidéo UGC sur mesure</span> d'après un <span className="highlight">brief</span> de votre choix</p>
                    <button className="brief-button-container gros-brief">
                        <p>Déposer un brief</p>
                    </button>





                </div>

                <div className="none nonePhoto imgVideo">
                    <ReactPlayer
                        url={'/video.mp4'}
                        className="video-presentation-inner"
                        playing={false}
                        height="100%"
                        width="100%"
                        muted
                        playIcon={<img src={'/playIcon.png'} alt=""/>}
                        light={<div style={{height: '100%', width: '100%'}}>
                            <img src={'/photoVideo.jpg'} alt="" style={{height: '100%', width: '100%'}}/>
                        </div>}
                        controls={true}
                        loop
                    />
                </div>

                <div className="video-presentation">
                    <ReactPlayer
                        url={'/video.mp4'}
                        className="video-presentation-inner"
                        playing={true}
                        height="100%"
                        width="100%"
                        muted
                        playIcon={<img src={'/playIcon.png'} alt="" className="playIcon"/>}
                        controls={true}
                        // light={<div style={{height: '100%', width: '100%', backgroundColor: '#A885FF'}}/>}
                        loop
                    />
                </div>

            </div>

            <section className="part2-marque">
                <h2 className="inner-title">Vous avez <span className="highlight-light-blue">rapidemment</span> besoin de <span className="highlight-light-blue">contenu vidéo unique</span> pour votre marque ? <br/>
                Vous aimeriez <span className="highlight-light-blue">promouvoir</span> vos produits et services par une <span className="highlight-light-blue">communauté d'utilisateurs</span> ?
                    Les sociétés de production vidéo sont <span className="highlight-light-blue">trop chères</span> ?
                </h2>

                <div className="flex">
                    <img src="" alt=""/>
                    <div className="text-vogz">
                        <h2 className="marque-title">VOGZ</h2>
                        <p>Une solution innovante qui vous permet de développer des contenus sur <span className="highlight">mesure, authentiques, efficaces</span> et <span className="highlight">créatifs,</span> à moindre coûts.</p>
                        <p>A travers une application mobile, le <span className="vogz">Vogzter</span> peut être <span className="highlight">cadré,</span> orienté ou totalement <span className="highlight">libre</span> de vous proposer un contenu qui <span className="highlight">lui ressemble</span> parmis nos <span className="highlight">5 types de</span> <span className="vogz">VOGZ</span>. </p>
                        <p>La marque à quant à elle, accès à <span className="highlight">sa propre plateforme web</span> pour faire son choix et échanger avec les <span className="vogz">Vogzters</span> si besoin.</p>
                        <PurpleButton />
                    </div>
                </div>
            </section>

            <section className="part3-marque">
                <div className="flex">
                    <div className="createur-container">
                        <h2 className="marque-title">Créateur, <br/> mais surtout <span className="vogz-light-blue">Vogzter</span></h2>
                        <p><span className="vogz">VOGZ</span> c’est avant tout une <span className="highlight">communauté :</span> celle des <span className="vogz">Vogzters</span>. Des profils de tout horizons, au talent variés qui sauront parfaitement <span className="highlight">répondre à vos attentes.</span></p>
                        <p>Dès que vous <span className="highlight">poster un brief </span>sur l’app, les <span className="vogz">Vogzters</span> reçoivent une <span className="highlight">notification</span> et le concours est lancé. Vous recevez autant <span className="highlight">de propositions que de participation</span> et vous n’avez qu’à choisir les <span className="vogz">VOGZ</span> qui vous intéressent !</p>
                        <p>Ils sont libres de postuler aux briefs qu’ils souhaitent et s’engagent à <span className="highlight">envoyer au moins une</span> <span className="vogz">VOGZ</span> sur chaque brief auquel ils participent. </p>
                    </div>

                    <div className="img-rond-container">
                        <img src={'/rondPhotoMontage.png'} alt=""/>
                    </div>
                </div>
            </section>


            <section className="part4-marque">
                <h4>5 types de VOGZ</h4>
            </section>

            <section className="part5-marque">
                <div className="flex">
                    <div className="card-container">
                        <img src={'/time.png'} alt=""/>
                        <h5>Gagner du temps</h5>
                    </div>

                    <div className="card-container">
                        <img src={'/group.png'} alt=""/>
                        <h5>Un contenu de qualité</h5>
                    </div>

                    <div className="card-container">
                        <img src={'/author.png'} alt=""/>
                        <h5>Les droits d'auteurs</h5>
                    </div>
                </div>

                <div className="flex">
                    <div className="card-container">
                        <img src={'/light.png'} alt=""/>
                        <h5>Des propositions riches</h5>
                    </div>

                    <div className="card-container">
                        <img src={'/handshake.png'} alt=""/>
                        <h5>Un encadrement</h5>
                    </div>

                    <div className="card-container">
                        <img src={'/euro.png'} alt=""/>
                        <h5>Des économies</h5>
                    </div>
                </div>
            </section>

            <section className="part6-marque">
                <h2 className="marque-title"><span className="vogz-light-blue">Un process : </span><br/> simple, rapide et efficace</h2>
                <p>Si vous êtes encore là, <span className="highlight">découvrez...</span></p>
                <PurpleButton />
            </section>

            <Footer />
        </div>
    );
};

export default Marques;