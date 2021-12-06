import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import del from "../../img/delete.svg";
import dislike from "../../img/dislike.svg";
import edit from "../../img/edit.svg";
import like from "../../img/like.svg";
import { deletePost, updatePost } from "../Api/Api";
import Rating from "../Rating/Rating";
import "./Post.css";
import { useTranslation } from 'react-i18next';

const Post = ({ post, setIsUpdate }) => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const { category, title, text, id, name, image } = post;
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState(title);
  const [textUpdate, setTextUpdate] = useState(text);
  const [imageUpdate, setImageUpdate] = useState(image);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  const deletedPost = () => {
    deletePost({
      id: id,
      name: name,
      title: title,
      category: category,
      text: text,
      image: image,
    });
    setIsUpdate(true);
  };
  const update = () => {
    updatePost({
      id: id,
      title: titleUpdate,
      text: textUpdate,
      image: imageUpdate,
    });
    setIsUpdate(true);
  };
  const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

  return (
    <div className="post">
      <div className="container">
        <Row>
          <Col>
            {isLogin ? (
              <Card>
                <Card.Header>
                  Категория : {category} | {name}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="textoneline">{text}</Card.Text>
                  <Col>
                    <Button variant="primary" 
                    onClick={handleShow}
                    className="details"
                    >
                    {t('details.1')}
                    </Button>
                    <Button
                      className="photodel"
                      variant="light"
                      onClick={deletedPost}
                    >
                      <img src={del} alt="del"></img>
                    </Button>
                    <Button
                      className="photoedit"
                      variant="light"
                      onClick={handleShowUpdate}
                    >
                      <img src={edit} alt="del"></img>
                    </Button>
                  </Col>
                  <Row>
                    <div className="likesrating">
                      <Button className="photolike" variant="light">
                        <img src={like} alt="del"></img>
                      </Button>
                      <Button className="photodislike" variant="light">
                        <img src={dislike} alt="del"></img>
                      </Button>
                      <div className="test"></div>
                      <Rating />
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            ) : (
              <Card>
                <Card.Header>
                  Категория : {category} | {name}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="textoneline">{text}</Card.Text>
                  <Col>
                    <Button variant="primary" onClick={handleShow}>
                      Подробнее
                    </Button>
                  </Col>
                  <Row>
                    <div className="likesrating">
                      <Button className="photolike" variant="light">
                        <img src={like} alt="del"></img>
                      </Button>

                      <Button className="photodislike" variant="light">
                        <img src={dislike} alt="del"></img>
                      </Button>
                      <div className="test"></div>
                      <Rating />
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>

        <Modal
          show={show}
          onHide={handleClose}
          className="modal"
          size="lg"
          centered
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Row>
              <h4 className="category">
                Категория : {category} | Автор : {name}
              </h4>
            </Row>
          </Modal.Header>
          <h5 className="title" type="text">
            {title}
          </h5>
          <Row>
            <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
          </Row>
          <Card.Img className="photo" variant="top" src={image} />
          <Modal.Body className="textPost">
            <p>{text}</p>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>

        <Modal
          show={showUpdate}
          onHide={handleCloseUpdate}
          size="lg"
          centered
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Row>
            <h4 className="category">
              Категория : {category} | Автор : {name}
            </h4>
          </Row>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              defaultValue={title}
              onChange={(e) => {
                setTitleUpdate(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              defaultValue={text}
              onChange={(e) => {
                setTextUpdate(e.target.value);
              }}
            />
          </InputGroup>
          <Card.Img
            className="photo"
            variant="top"
            src={image}
            onChange={(e) => {
              setImageUpdate(e.target.value);
            }}
          />
          <Col>
            <Button className="updatePost" variant="primary" onClick={update}>
              Изменить
            </Button>
          </Col>
        </Modal>
      </div>
    </div>
  );
};

export default Post;
