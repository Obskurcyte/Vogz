import React, {useState} from 'react';
import Header from "../components/Header";
import {Formik} from "formik";
import Footer from "../components/Footer";
import HeaderMarque from "../components/HeaderMarque";
import FooterMobile from "../components/FooterMobile";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const DeposerUnBrief = () => {

    const initialValues = {
        nom: '',
        prenom: '',
        typeVideo: '',
        nomSociete: '',
        email: '',
        phone: ''
    }

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const [value, setValue] = useState('Test Produit');

    return (
        <div>
            <HeaderMarque />
            <div className="computer-view">


            <div className="flex-between">
                <div className="logo-container-brief">
                    <div className="vogz-logo-container">
                        <img src={'/vogzLogo.png'} alt=""/>
                    </div>
                </div>

                <div className="deposer-brief-container">
                    <div className="brief-container">
                        <h1 className="deposer-brief-title">Déposer un brief</h1>
                        <h3 className="satisfait-rembourse-text">Garantie satisfait ou remboursé</h3>

                        <p className="rendez-vous">Prenez rendez-vous avec votre account manager pour déposer votre premier brief !</p>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            {props => (
                                <div>
                                    <div className="flex justify-content-between nom-prenom">
                                        <div className="flex-column">
                                            <div>
                                                <label htmlFor="name" className="label-brief">Nom</label>
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                className="input-nom"
                                                value={props.values.nom}
                                                onChange={props.handleChange('nom')}
                                            />
                                        </div>
                                        <div className="flex-column mb-2">
                                            <div>
                                                <label htmlFor="prenom" className="label-brief">Prénom</label>
                                            </div>
                                            <input
                                                type="text"
                                                name="prenom"
                                                className="input-nom"
                                                value={props.values.prenom}
                                                onChange={props.handleChange('prenom')}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-column mb-2 popup-material-ui" ref={anchorRef} onClick={handleToggle}>
                                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                                >
                                                    <Paper>
                                                        <ClickAwayListener onClickAway={handleClose}>
                                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                                <MenuItem onClick={() => {
                                                                    setValue("Test Produit")
                                                                    handleClose()
                                                                }}>Test Produit</MenuItem>
                                                                <MenuItem onClick={() => {
                                                                    setValue("Témoignage")
                                                                    handleClose()
                                                                }}>Témoignage</MenuItem>
                                                                <MenuItem onClick={() => {
                                                                    setValue("Acting")
                                                                    handleClose()
                                                                }}>Acting</MenuItem>
                                                                <MenuItem onClick={() => {
                                                                    setValue("Créativité")
                                                                    handleClose()
                                                                }}>Créativité</MenuItem>
                                                                <MenuItem onClick={() => {
                                                                    setValue("Chorégraphie/Chant")
                                                                    handleClose()
                                                                }}>Chorégraphie/Chant</MenuItem>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                        <div>
                                            <label className="label-brief">Type de vidéo</label>
                                        </div>
                                        <div className="type-video-container">
                                            <p className="test-produit">{value}</p>
                                            <img src={'/arrowBottomBrief.png'} alt="" className="arrowButtonBrief"/>
                                        </div>
                                    </div>

                                    <div className="flex-column mb-2">
                                        <div>
                                            <label htmlFor="nomSociete" className="label-brief">Nom de votre société</label>
                                        </div>
                                            <input
                                                type="text"
                                                className="type-video-container"
                                                name="nomSociete"
                                                value={props.values.nomSociete}
                                                onChange={props.handleChange('nomSociete')}
                                            />
                                    </div>


                                    <div className="flex-column mb-2">
                                        <div>
                                            <label htmlFor="email" className="label-brief">Email</label>
                                        </div>
                                            <input
                                                type="text"
                                                name="email"
                                                className="type-video-container"
                                                value={props.values.email}
                                                onChange={props.handleChange('email')}
                                            />
                                    </div>


                                    <div className="flex-column">
                                        <div>
                                            <label htmlFor="phone" className="label-brief">Numéro de téléphone</label>
                                        </div>
                                            <div className="flex numero-container">
                                                <div className="numero">
                                                    <p>FR +33</p>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="numero-inner-container"
                                                    value={props.values.phone}
                                                    onChange={props.handleChange('phone')}
                                                />
                                            </div>
                                    </div>


                                    <button className="rendez-vous-button">
                                        Prendre rendez-vous
                                    </button>

                                </div>
                            )}

                        </Formik>
                    </div>
                </div>

            </div>
                <Footer />
            </div>

            <div className="phone-view">
                <section className="brief-phone">
                <div className="vogzLogo-phone-container">
                    <img src={'/vogzLogo.png'} alt=""/>
                </div>

                <div className="brief-h1-phone-container">
                    <h2>Déposer un brief</h2>
                    <p>Garantie satisfait ou remboursé</p>
                </div>

                <div className="brief-rendez-vous-phone-container">
                    <h5>Prenez rendez-vous avec
                        votre account manager pour déposer votre premier brief !</h5>
                </div>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {props => (
                        <div className="phone-brief-container">
                            <div className="flex justify-content-between nom-prenom">
                                <div className="flex-column">
                                    <div>
                                        <label htmlFor="name" className="label-brief">Nom</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input-nom"
                                        value={props.values.nom}
                                        onChange={props.handleChange('nom')}
                                    />
                                </div>
                                <div className="flex-column mb-2 popup-material-ui" ref={anchorRef} onClick={handleToggle}>
                                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                            <MenuItem onClick={() => {
                                                                setValue("Test Produit")
                                                                handleClose()
                                                            }}>Test Produit</MenuItem>
                                                            <MenuItem onClick={() => {
                                                                setValue("Témoignage")
                                                                handleClose()
                                                            }}>Témoignage</MenuItem>
                                                            <MenuItem onClick={() => {
                                                                setValue("Acting")
                                                                handleClose()
                                                            }}>Acting</MenuItem>
                                                            <MenuItem onClick={() => {
                                                                setValue("Créativité")
                                                                handleClose()
                                                            }}>Créativité</MenuItem>
                                                            <MenuItem onClick={() => {
                                                                setValue("Chorégraphie/Chant")
                                                                handleClose()
                                                            }}>Chorégraphie/Chant</MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                    <div>
                                        <label htmlFor="prenom" className="label-brief">Prénom</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="prenom"
                                        className="input-nom"
                                        value={props.values.prenom}
                                        onChange={props.handleChange('prenom')}
                                    />
                                </div>
                            </div>

                            <div className="flex-column mb-2">
                                <div>
                                    <label className="label-brief">Type de vidéo</label>
                                </div>
                                <div className="type-video-container">
                                    <p className="test-produit">{value}</p>
                                    <img src={'/phonearrowBottom.png'} alt="" className="arrowButtonBrief"/>
                                </div>
                            </div>

                            <div className="flex-column mb-2">
                                <div>
                                    <label htmlFor="nomSociete" className="label-brief">Nom de votre société</label>
                                </div>
                                <input
                                    type="text"
                                    className="type-video-container"
                                    name="nomSociete"
                                    value={props.values.nomSociete}
                                    onChange={props.handleChange('nomSociete')}
                                />
                            </div>


                            <div className="flex-column mb-2">
                                <div>
                                    <label htmlFor="email" className="label-brief">Email</label>
                                </div>
                                <input
                                    type="text"
                                    name="email"
                                    className="type-video-container"
                                    value={props.values.email}
                                    onChange={props.handleChange('email')}
                                />
                            </div>


                            <div className="flex-column">
                                <div>
                                    <label htmlFor="phone" className="label-brief">Numéro de téléphone</label>
                                </div>
                                <div className="flex numero-container">
                                    <div className="numero">
                                        <p>FR +33</p>
                                    </div>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="numero-inner-container"
                                        value={props.values.phone}
                                        onChange={props.handleChange('phone')}
                                    />
                                </div>
                            </div>


                            <button className="rendez-vous-button">
                                Prendre rendez-vous
                            </button>

                        </div>
                    )}

                </Formik>
                </section>

                <FooterMobile />
            </div>


        </div>
    );
};

export default DeposerUnBrief;