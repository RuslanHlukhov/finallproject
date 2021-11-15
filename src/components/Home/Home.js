import React from "react";
import './Home.css'
import { useState } from "react";
import { DropdownButton, Dropdown, Form, InputGroup, FormControl, Button, Row, Col, Card } from 'react-bootstrap'
import Post from "../Post/Post";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import  Axios  from "axios";


const Home = (props) => {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }  
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');       

    const dbUrl = 'https://backendforfinallproject.herokuapp.com/api/'
    const addTest = () => {
        Axios.post(`${dbUrl}users`, {
            title:title,
            text:text
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }


   
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    const isLogin = useSelector(({ isLogin }) => isLogin);
    return (
        <div>
            {isLogin ?
            <div className="information col-lg-3" >
                <Form className="form">
                    <InputGroup className="mb-3">
                        <DropdownButton
                            variant="outline-secondary"
                            title={value}
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey={t('games.1')}>{t('games.1')}</Dropdown.Item>
                            <Dropdown.Item eventKey={t('films.1')}>{t('films.1')}</Dropdown.Item>
                            <Dropdown.Item eventKey={t('books.1')}>{t('books.1')}</Dropdown.Item>
                            <Dropdown.Divider />
                        </DropdownButton>
                        <FormControl aria-label="Text input with dropdown button" />
                        <Button variant="outline-secondary" id="button-addon2">
                            Tags
                        </Button>
                    </InputGroup>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder=""
                            onChange={(event) => {
                                setTitle(event.target.value)
                            }
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Select text</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={(event) => {
                                setText(event.target.value)
                            }
                            }
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Default file input example</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Col>
                        <Col className="btn__sand">
                            <Button className="btn__send" as="input" type="button" value="Input"
                                onClick={addTest}
                            />
                        </Col>
                    </Row>
                </Form>
                <Post />
                </div> 
                :
                <Post />
            }                        
        </div>
    )
}

export default Home;