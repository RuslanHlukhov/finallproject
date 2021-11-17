import React from "react";
import { Button, Col, Card, Modal } from 'react-bootstrap'
import { useState } from "react";
import './Post.css'


const Post = ({post}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {title, text} = post;           

    return (
        <div className="container post">
            <Col>
                <Card style={{ width: '100%' }}>
                <Card.Header>Категория</Card.Header>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {text}
                        </Card.Text>
                        <Button variant="primary">Подробнее</Button>
                    </Card.Body>
                </Card>
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