import React from "react";
import "./index.css";

const MenuLateral = React.forwardRef(({ isOpen, toggleMenu }, ref) => {
  return (
    <div ref={ref} className={`menu-lateral ${isOpen ? "open" : ""}`}>
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
        <a className="item" href="">
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
