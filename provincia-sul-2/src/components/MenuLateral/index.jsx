import React from "react";
import "./index.css";
import PdfPreview from "../PdfPreview";
import { useState } from "react";
import App from "../../App";

const MenuLateral = React.forwardRef(({ isOpen, toggleMenu, togglePdfViewer }, ref) => {
  return (
    <div ref={ref} className={`menu-lateral ${isOpen ? "open" : ""}`}>
      <img src="/assets/img/logo.png" alt="Logo" className="menu-logo" />
      <button className="close-btn" onClick={toggleMenu}>
        X
      </button>
      <nav>
        <a className="item" href="">
          Programação
        </a>
        <a className="item" href="">
          Caderno do Encontro
        </a>
        <a className="item" href="#" onClick={(event) => { event.preventDefault(); togglePdfViewer(); }}>
          Grupos
        </a>
        <a className="item" href="https://docs.google.com/forms/d/e/1FAIpQLSdu7g_wG7-8QaHFnLLtbVAdt398RZqfgkep0-qcHRSeb9jEpg/viewform">
          Dúvidas para Plenária
        </a>
        <a className="item" href="">
          Ver Fotos
        </a>
        <a className="item" href="">
          Enviar Fotos
        </a>
        <a className="item" href="">
          Avaliação
        </a>
      </nav>
    </div>
  );
});

export default MenuLateral;
