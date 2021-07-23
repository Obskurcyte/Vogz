import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      <Header />
      <div className='home-container'>
        <div className="left">
          <img src={'/femmePhone.png'} alt=""/>
          <div className="be-vogzter">
            <p>JE SUIS VOGZTER</p>
          </div>
        </div>

        <div className="middle">
          <div className="vogzLogo">
            <img src={'/vogzLogo.png'} alt="" className="vogzLogoImg"/>
          </div>
          <h5>La nouvelle façon de communiquer</h5>
          <p>Que vous soyez <span className="highlight">créateur de contenu</span> ou <span className="highlight">une marque, </span> <span className="blueText">VOGZ</span> est fait pour vous !</p>
        </div>

        <img src={'/arrows.png'} alt="" className="arrowsImg"/>
        <img src={'/arrowMobileWhite.png'} alt="" className="arrowMobileWhite"/>
        <img src={'/arrowMobileBlue.png'} alt="" className="arrowMobileBlue"/>

        <div className="right">
          <img src={'/phone2-removebg.png'} alt=""/>
          <div className="be-marque">
            <p>JE SUIS UNE MARQUE</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
