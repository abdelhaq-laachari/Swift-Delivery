import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
// import logo from "../../assets/images/res-logo.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../../styles/header.css";

const Header = () => {
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

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Swift Delivery</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              <HashLink
                to="/#home"
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                }
              >
                Home
              </HashLink>
              <HashLink
                to="/#services"
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                }
              >
                Services
              </HashLink>
              <HashLink
                to="/#about"
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                }
              >
                About
              </HashLink>
              <HashLink
                to="/#review"
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                }
              >
                Reviews
              </HashLink>
              <HashLink
                to="/contact"
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                }
              >
                Contact
              </HashLink>
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
