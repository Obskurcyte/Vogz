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
import "../html5-device-mockups/dist/device-mockups.min.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Head>
          <title>Vogz</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
                  crossOrigin="anonymous"/>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin/>

            <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossOrigin/>

            <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin />
        </Head>
        <Component {...pageProps} />
      </div>
      )

}

export default MyApp
