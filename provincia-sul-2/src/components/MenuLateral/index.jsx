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
        <a className="item" href="">
          Dúvidas para Plenária
        </a>
        <a className="item" href="">
          Ver Fotos
        </a>
        <a className="item" href="">
          Enviar Fotos
        </a>
        <a className="subitem" href="">
          Mapa das Salas
        </a>
        <a className="subitem" href="">
          Avaliação
        </a>
      </nav>
    </div>
  );
});

export default MenuLateral;
