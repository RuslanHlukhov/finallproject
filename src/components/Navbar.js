import React,{useEffect} from "react";
import { Nav, Navbar, Button, Col, Row, Form, Checkbox } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useTranslation } from 'react-i18next';
import imgGoogle from './../img/google.png'
import imgGit from './../img/github.png'
import "firebase/compat/auth";
import socialAuth from "./auth/auth";
import { googleProvider, githubProvider } from '../firebase/authMethods'
import { useDispatch } from "react-redux";
import { addUser, logIn, getPosts} from "../redux/action";
import { useSelector } from 'react-redux';
import Darkstyles from "./Darkstyle/Darkstyle";


const Navibar = () => {

    const switchDarkTheme = () =>{
        window.localStorage.setItem('theme', 'dark')
        const style = document.createElement('style')
        document.head.appendChild(style)
        style.innerHTML = Darkstyles
    }


    useEffect(()=>{
        if(window['localStorage'] !== null){
            window.localStorage.getItem('theme') === 'dark'
                ? 
                switchDarkTheme()
                :
                window.localStorage.setItem('theme', 'light')
        }
    })


    
    const dispatch = useDispatch();


    const getUser = () => {
        const userData = window.localStorage.getItem('user');
        if (userData) {
          const userInfo = JSON.parse(userData);
          return userInfo;
        }
      };

    const user = getUser()
    if(user){
        dispatch(logIn(true))
    }
   
    const handleBtn = async (provider) => {
        const res = await  socialAuth(provider);
        if (res) {
            dispatch(logIn(true))
            window.localStorage.setItem(
                'user',
                JSON.stringify({
                name:res.displayName,      
                id:res.uid 
                })                       
            )                    
        }
        if (res) {
            dispatch(logIn(true))
            dispatch(
                addUser({
                  nameUser: res.displayName,
                  idUser: res.uid,
                })
              );
        }                         
    } 



    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    
    const name = useSelector(({user}) => {
        return user.nameUser
        
    })

    const isLogin = useSelector(({ isLogin }) => isLogin);
    const nameId = useSelector(({user}) => {
        return user.idUser
    })

    const signOut = () => {
        dispatch(logIn(false));
        window.localStorage.removeItem('user');
    }

    return (
        <div className="navbar">
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbar" >
                <Navbar.Brand className="mr-2" brandNavbar>{t('title.1')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toogle" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    {isLogin ?
                        <Nav className="me-auto menu">                           
                            <Nav.Link><Link to="/home">{t('home.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/games">{t('games.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/films">{t('films.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/books">{t('books.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/users">{t('users.1')}</Link></Nav.Link>
                        </Nav>
                        :
                        <Nav className="me-auto menu">  
                            <Nav.Link><Link to="/home">{t('home.1')}</Link></Nav.Link> 
                            <Nav.Link><Link to="/games">{t('games.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/films">{t('films.1')}</Link></Nav.Link>
                            <Nav.Link><Link to="/books">{t('books.1')}</Link></Nav.Link>
                        </Nav>
                    }
                    <Form.Check 
                    className="dark"
                    name='theme'
                    onChange={()=>{
                        if(window.localStorage.getItem('theme') === 'dark'){
                            window.localStorage.setItem('theme', 'light')
                        }else{
                            window.localStorage.setItem('theme', 'dark')
                        }
                        window.location.reload()
                    }}
                    checked={window.localStorage.getItem('theme') === 'dark'}
                    label='🌙 Darkmode'
                    />
                    <Nav  className="me-auto menu login">
                        <Col>
                        <Button onClick={() => handleClick('ru')} variant="primary" className="me-2 btn_lang">RU</Button> 
                        <Button  className="btn_lang me-2" onClick={() => handleClick('en')} variant="primary">ENG</Button> 
                        </Col>
                    </Nav>
                    <Nav>
                        <Col>
                        {isLogin ?
                           
                           <Row>
                           <div className="color">{}</div>
                            <Button  variant="primary"
                                className="me-2 btn_login"
                                onClick={ signOut}

                            >
                                {name}
                                
                            </Button>
                                  
                            </Row>          
                            :
                            <div className="menu">
                            <Button className="btn_google"
                            onClick={() => handleBtn(googleProvider)}
                    
                            >                                   
                            <img src={imgGoogle} alt="google" />
                            </Button>
                             <Button className="btn_gitHub"
                              onClick={() => handleBtn(githubProvider)}
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