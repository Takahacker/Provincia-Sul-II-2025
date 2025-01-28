import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import MenuLateral from "../MenuLateral";

function Header({ togglePdfViewer }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <img
          src="/assets/img/menu.png"
          alt="Menu Icon"
          className="hamb"
          onClick={toggleMenu}
        />
        <a href="/">
          <img src="/assets/img/logo.png" alt="Logo" className="logo" />
        </a>
      </header>
      <MenuLateral isOpen={isMenuOpen} toggleMenu={toggleMenu} togglePdfViewer={togglePdfViewer} ref={menuRef} />
    </>
  );
}

export default Header;
