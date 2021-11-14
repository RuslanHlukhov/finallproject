import React from "react";
import './Home.css'
import { useState } from "react";
import { DropdownButton, Dropdown, Form, InputGroup, FormControl, Button, Row, Col, Card } from 'react-bootstrap'
import Axios from "axios";


const Home = (props) => {
    
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // const [name, setName] = useState('');
    // const [photo, setPhoto] = useState('')
    const [items, setItems] = useState([]);


    const dbUrl = 'https://backendforfinallproject.herokuapp.com/api/'
    const addTest = () => {
        Axios.post(`${dbUrl}users`, {
            title: title,
            text: text,
        }).then(() => {
            setItems([
                ...items,
                {
                    title: title,
                    text: text,
                }
            ])
        }).catch(error => {
            console.log(error.response);
        })
    }
    const getData = () => {
        Axios.get(`${dbUrl}users`).then((response) =>{
                setItems(response.data)
            })
        } 
    return (   
        <div>
            <div className="information">
                <Form className="form">
                    <InputGroup className="mb-3">
                        <DropdownButton
                            variant="outline-secondary"
                            title="Выберите раздел"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="#">Игры</Dropdown.Item>
                            <Dropdown.Item href="#">Фильмы</Dropdown.Item>
                            <Dropdown.Item href="#">Книги</Dropdown.Item>
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
                                onClick={addTest, getData}
                            />
                        </Col>
                    </Row>
                </Form>
                {items.map((key,val) => { 
                    return(               
                <div class="container">
                <Col>
                    <div class="row">
                        <div class="col-sm">
                            <Card style={{ width: '25rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{val.title}</Card.Title>
                                    <Card.Text>
                                        {val.text}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    </Col>      
                </div>  
                    ) 
                })}   
                     
            </div>
        </div>
    )
}

export default Home;