import React, { useRef, useEffect, useState } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../../styles/header.css";

import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import Cookies from "js-cookie";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  useEffect(() => {
    if (Cookies.get("token")) {
      setIsLogin(true);
    }
    else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Swift Delivery</h5>
          </div>

          {/* ======= menu ======= */}
          {isLogin ? (
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                <HashLink to="/#home">Home</HashLink>
                <HashLink to="/profile">Profile</HashLink>
              </div>
            </div>
          ) : (
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                <HashLink to="/#home">Home</HashLink>
                <HashLink to="/#services">Services</HashLink>
                <HashLink to="/#about">About</HashLink>
                <HashLink to="/#review">Reviews</HashLink>
                <HashLink to="/drivers">Drivers</HashLink>
              </div>
            </div>
          )}

          {/* ======== nav right icons ========= */}
          {isLogin ? (
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="user">
                <Link to="/login">
                  <AiOutlineLogout
                  className="logout"
                    onClick={() => {
                      Cookies.remove("token");
                      setIsLogin(false);
                      window.location.href = "/login";
                    }}
                  />
                </Link>
              </span>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          ) : (
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="user">
                <Link to="/login">
                  <AiOutlineLogin className="login" />
                </Link>
              </span>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
