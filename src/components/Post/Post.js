import React from "react";
import { Button, Card, Modal,Row,Col } from 'react-bootstrap'
import { useState } from "react";
import './Post.css'
import textfoto from '../img/textfoto.jpg'


const Post = ({post}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {category, title, text} = post;           

    return (
        <div className="post">
        <div className="container">
            
                <Col>
                <Card >
                <Card.Header>{category}</Card.Header>
                    
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {text}
                        </Card.Text>
                        <Button variant="primary"onClick={handleShow}>Подробнее</Button>
                    </Card.Body>
                </Card>
                </Col>
            
             <Modal show={show} onHide={handleClose}> 

            <Modal.Header closeButton>
            <Row>
            <h4 className="category">{category}</h4>
            </Row>
            </Modal.Header>
            <h5 className="title">{title}</h5>
            <Row><Modal.Title id="example-modal-sizes-title-lg" >           
                </Modal.Title>
            </Row>
                           
                <Card.Img className="photo" variant="top" src={textfoto} me-2/>
                <Modal.Body className="textPost">{text}</Modal.Body>
                
            
            </Modal> 
        </div>
        </div>
    )
}


export default Post;