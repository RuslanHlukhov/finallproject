import { Button, Col, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LangBtn = () => {
  const { i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Nav className="me-auto menu login">
      <Col>
        <Button
          onClick={() => handleClick("ru")}
          variant="primary"
          className="me-2 btn_lang"
        >
          RU
        </Button>
        <Button
          className="btn_lang me-2"
          onClick={() => handleClick("en")}
          variant="primary"
        >
          ENG
        </Button>
      </Col>
    </Nav>
  );
};

export default LangBtn;
