import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../edusity_assets/logo.png";
import menuicon from "../edusity_assets/menu-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${show ? "navbar-scrolled bg-dark" : "bg-transparent"}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button className="navbar-toggler" type="button" onClick={() => setShowMenu(!showMenu)}>
          <img src={menuicon} alt="Menu" className="menuIcon" />
        </button>

        <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link" to="image" smooth offset={0} duration={500}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="program" smooth offset={-260} duration={500}>Program</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth offset={-150} duration={500}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="reviews" smooth offset={-260} duration={500}>Campus</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary ms-3" to="contact" smooth offset={-260} duration={500}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;