import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { addTest } from "../Api/Api";
import "./FormPost.css";
import { getInfoUser } from "../../utils";

const FormPost = ({ setIsUpdate }) => {
  const [name, setName] = useState("");
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const addPost = () => {
    if (title && text && category) {
      addTest({
        name: name,
        title: title,
        category: category,
        text: text,
        image: image,
      });
      setIsUpdate(true);
      setError("");
    } else {
      setError("Заполните все поля");
    }
  };

  useEffect(() => {
    const user = getInfoUser();
    if (user) {
      setName(user.name);
    }
  }, []);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "jmz8vdyg");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzkpy4oac/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
  };

  const handleSelect = (e) => {
    console.log(e);
    setCategory(e);
  };
 
  return (
    <div сlassName="form" style={{ width: "60%" }}>
      <Col>
        <Form className="">
          <div className="name">{name}</div>
          <InputGroup className="mb-3">
            <DropdownButton
              name="category"
              variant="outline-secondary"
              title={category}
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
              onChange={(event) => {
                setCategory(handleSelect);
              }}
            >
              <Dropdown.Item eventKey={t("games.1")}>
                {t("games.1")}
              </Dropdown.Item>
              <Dropdown.Item eventKey={t("films.1")}>
                {t("films.1")}
              </Dropdown.Item>
              <Dropdown.Item eventKey={t("books.1")}>
                {t("books.1")}
              </Dropdown.Item>
              <Dropdown.Divider />
            </DropdownButton>
            <FormControl aria-label="Text input with dropdown button" />
            <Button variant="outline-secondary" id="button-addon2">
              Tags
            </Button>
          </InputGroup>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              placeholder=""
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Select text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </Form.Group>
          <span style={{ color: "red", marginBottom: "1%", display: "block" }}>
            {error.length ? error : null}
          </span>
          <Row>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  name="file"
                  placeholder="Upload an Image"
                  onChange={uploadImage}
                />
              </Form.Group>
            </Col>
            <Col>
              <img
                className="imgpost"
                src={image}
                style={{ width: "200px", textAlign: "center" }}
                alt=""
              />
            </Col>
            <Col>
              <Button
                className="btn__send"
                as="input"
                type="button"
                value="Input"
                onClick={addPost}
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </div>
  );
};

export default FormPost;
