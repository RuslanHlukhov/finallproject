import "firebase/compat/auth";
import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/action";
import Darkstyles from "../Darkstyle/Darkstyle";
import LangBtn from "../LangBtn/LangBtn";
import "./Navbar.css";
import Theme from "../Theme/Theme";
import Login from "../Login/Login";
import { getInfoUser } from '../../utils';

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLogin = useSelector(({ isLogin }) => isLogin);

  const switchDarkTheme = () => {
    window.localStorage.setItem("theme", "dark");
    const style = document.createElement("style");
    document.head.appendChild(style);
    style.innerHTML = Darkstyles;
  };

  useEffect(() => {
    if (window["localStorage"] !== null) {
      window.localStorage.getItem("theme") === "dark"
        ? switchDarkTheme()
        : window.localStorage.setItem("theme", "light");
    }
  });

  useEffect(() => {
    const user = getInfoUser();
    if (user) {
      dispatch(logIn(true));
    }
  }, [isLogin, dispatch]);

  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toogle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto menu">
            <Nav.Link>
              <Link to="/home">{t("home.1")}</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/games">{t("games.1")}</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/films">{t("films.1")}</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/books">{t("books.1")}</Link>
            </Nav.Link>
            {isLogin ? (
              <Nav.Link>
                <Link to="/users">{t("users.1")}</Link>
              </Nav.Link>
            ) : null}
          </Nav>
          <Theme />
          <LangBtn />
          <Login />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
