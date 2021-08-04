import Link from "next/link";
import React from "react";

const FooterMobile = () => {
    return (
        <footer className="footer-mobile">
            <div className="footer-mobile-container">
                <div className="flex-between footer-mobile-innner">

                    <div className="flex-column">
                        <Link href="#">
                            <p>Politique de confidentialité</p>
                        </Link>
                        <Link href="#">
                            <p>Mentions légales</p>
                        </Link>
                    </div>

                    <div className="flex-column">
                        <div className="flex-column">
                            <Link href="#">
                                <p>Qui sommes-nous ?</p>
                            </Link>
                            <Link href="#">
                                <p>Espace marque</p>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="contact-container">

                    <div className="flex-column footer-mobile-contact">
                        <Link href="#">
                            <p>Contactez-nous</p>
                        </Link>
                        <Link href="#">
                            <p className="phone">01 84 88 47 96</p>
                        </Link>
                    </div>
                </div>


                <div className="img-footer-mobile-container">
                    <img src={'/footerLogo.svg'} alt=""/>
                </div>
            </div>
        </footer>
    )
}

export default FooterMobile;
