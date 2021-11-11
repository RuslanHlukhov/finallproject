import React, {useState} from "react";
import {Button, Modal } from "react-bootstrap";
import imgGoogle from './../img/google.png'
import imgGit from './../img/github.png'



const Login = () =>{
    const[show, setShow] = useState(false)

    const handleClose = () =>{
    setShow (false);
    }
    
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body className="login">
            <Button className="btn_google"><img src={imgGoogle} alt="google" /> Login with Google</Button><br />
            <Button className="btn_gitHub"><img src={imgGit} alt="gitHub" />Login with GitHub</Button>
        </Modal.Body>
    </Modal>
    )
}

export default Login