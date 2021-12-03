import React, { useEffect, useState } from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { githubProvider, googleProvider } from "../../firebase/authMethods";
import imgGit from "../../img/github.png";
import imgGoogle from "../../img/google.png";
import { logIn } from "../../redux/action";
import { getInfoUser } from "../../utils";
import socialAuth from "../auth/auth";

const Login = () => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleBtn = async (provider) => {
    const res = await socialAuth(provider);
    if (res.uid) {
      dispatch(logIn(true));
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          name: res.displayName,
          id: res.uid,
        })
      );
      setName(res.displayName);
    }
  };

  const signOut = () => {
    dispatch(logIn(false));
    window.localStorage.removeItem("user");
  };

  useEffect(() => {
    const user = getInfoUser();
    if (user) {
      setName(user.name);
    }
  }, []);

  return (
    <Nav>
      <Col>
        {isLogin ? (
          <Row>
            <div className="color">{}</div>

            <Button
              variant="primary"
              className="me-2 btn_login"
              onClick={signOut}
            >
              {name}
            </Button>
          </Row>
        ) : (
          <div className="menu">
            <Button
              className="btn_google"
              onClick={() => handleBtn(googleProvider)}
            >
              <img src={imgGoogle} alt="google" />
            </Button>
            <Button
              className="btn_gitHub"
              onClick={() => handleBtn(githubProvider)}
            >
              <img src={imgGit} alt="gitHub" />
            </Button>
          </div>
        )}
      </Col>
    </Nav>
  );
};

export default Login;
