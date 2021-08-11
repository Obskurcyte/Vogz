import React from 'react';
import '../styles/globals.css'
import '../styles/home.css';
import '../styles/header.css';
import '../styles/devices.css';
import '../styles/headerMarque.css';
import '../styles/marques.css';
import '../styles/purpleButton.css';
import '../styles/footer.css';
import '../styles/comment.css';
import '../styles/brief.css';
import "../html5-device-mockups/dist/device-mockups.min.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Head>
          <title>Vogz</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
                  crossOrigin="anonymous"/>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin/>

            <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossOrigin/>

            <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css" />
                <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />
        </Head>
        <Component {...pageProps} />
      </div>
      )

}

export default MyApp
