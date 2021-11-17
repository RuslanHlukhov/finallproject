import React from "react";
import { Nav, Navbar, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useTranslation } from 'react-i18next';
import imgGoogle from './../img/google.png'
import imgGit from './../img/github.png'
import "firebase/compat/auth";
import socialAuth from "./auth/auth";
import { googleProvider } from '../firebase/authMethods'
import { useDispatch } from "react-redux";
import { logIn } from "../redux/action";
import { useSelector } from 'react-redux';

const Navibar = () => {
    const dispatch = useDispatch();

    const handleBtn = async (provider) => {
        const res = await socialAuth(provider);
        if (res) {
            dispatch(logIn(true));
        }
    };

    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    const isLogin = useSelector(({ isLogin }) => isLogin);
    const signOut = () => {
        dispatch(logIn(false));
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand className="mr-2">{t('title.1')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {isLogin ?
                        <Nav className="me-auto">                           
                            <Nav.Link><Link to="/home">{t('home.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/games">{t('games.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/films">{t('films.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/books">{t('books.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/users">{t('users.1')}</Link></Nav.Link>
                        </Nav>
                        :
                        <Nav className="me-auto">  
                            <Nav.Link><Link to="/home">{t('home.1')}</Link></Nav.Link> 
                            <Nav.Link><Link to="/games">{t('games.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/films">{t('films.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/books">{t('books.1')}</Link></Nav.Link>
                        </Nav>
                    }
                    <Nav className="me-auto">
                        <Button onClick={() => handleClick('ru')} variant="primary" className="me-2 btn_lang">RU</Button>
                        <Button className="btn_lang me-2" onClick={() => handleClick('en')} variant="primary">ENG</Button>
                    </Nav>
                    <Nav>
                        <Col>
                        {isLogin ?
                            <Button variant="primary"
                                className="me-2 btn_login"
                                onClick={signOut}                                
                            >
                                {t('signOut.1')}
                                </Button>
                                                      
                            :
                            <div>
                            <Button className="btn_google"
                            onClick={() => handleBtn(googleProvider)}
                            >
                            <img src={imgGoogle} alt="google" />
                            </Button>
                             <Button className="btn_gitHub"
                             >
                            <img src={imgGit} alt="gitHub" />
                            </Button>
                            </div>
                        }
                        </Col>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navibar;