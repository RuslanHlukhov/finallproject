import React from "react";
import { Button, Row, Col, Card, Modal } from 'react-bootstrap'
import { useState } from "react";
import './Post.css'
import {addTest} from '../constApi/constApi'

const Post = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const addPost = () =>{
        addTest({
            title:title,
            text:text
        });
    }

    return (
        <div className="container post">
            <Col>
                <div className="col-sm-3">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button onClick={handleShow} variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Change
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default Post;