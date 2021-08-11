import React from 'react';
import {useRouter} from "next/router";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const HeaderCommentCaMarcheMobile = () => {

    const router = useRouter();

    return (

        <Navbar bg="light" expand="lg" className="navbar-mobile-comment">
            <Navbar.Brand href="/" className='logoContainer'><div className="img-marques-header-container">
                <img src={'/vogzNavbar.png'} alt=""/>
            </div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav changecolor" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto expandNav">

                    <Nav.Link href="#"><li className="nav-item active">
                        <a className="nav-link links-text" href="#">Qui sommes-nous ?</a>
                    </li></Nav.Link>
                    <Nav.Link href="/comment-ca-marche"><li className="nav-item active">
                        <a className="nav-link links-text link-active" href="javascript:void(0)">Comment ça marche ?</a>
                    </li></Nav.Link>
                    <Nav.Link href="javascript:void(0)"><li>
                        <button className="brief-button-container petit-brief" onClick={() => router.push('/deposer-un-brief')}>
                            <p>Déposer un brief</p>
                        </button>
                    </li></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderCommentCaMarcheMobile;