import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Handle scroll effect for the event logo
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const logoElement = document.querySelector(".event-logo");
      logoElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Apply staggered animation delay to menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("loaded");
        item.style.animationDelay = `${index * 0.2}s`;
      }, index * 200); // Delay each item by 200ms
    });
  }, []);

  return (
    <div className="app">
      <div className="event-logo-frame">
        <div className="event-logo" />
      </div>
      {/* Header */}
      <Header />

      {/* Banner */}
      <section className="banner">
        <img
          src="/assets/img/banner-image.png"
          alt="No Caminho de Emaús"
          className="banner-image"
        />
      </section>

      {/* Menu */}
      <section className="menu">
        <a className="item" href="">
          <MenuItem
            icon="/assets/img/icon-programacao.png"
            label="Programação"
          />
        </a>
        <a className="item" href="">
          <MenuItem
            icon="/assets/img/icon-caderno.png"
            label="Caderno do Encontro"
          />
        </a>
        <a className="item" href="">
          <MenuItem icon="/assets/img/icon-grupos.png" label="Grupos" />
        </a>
        <a className="item" href="https://docs.google.com/forms/d/e/1FAIpQLSdu7g_wG7-8QaHFnLLtbVAdt398RZqfgkep0-qcHRSeb9jEpg/viewform">
          <MenuItem
            icon="/assets/img/icon-duvidas.png"
            label="Dúvidas para Plenária"
          />
        </a>
        <a className="item" href="">
          <MenuItem icon="/assets/img/icon-fotos.png" label="Ver Fotos" />
        </a>
        <a className="item" href="">
          <MenuItem icon="/assets/img/icon-camera.png" label="Enviar Fotos" />
        </a>
      </section>

      <section className="submenu">
        <a className="subitem" href="">
          <MenuItem icon="/assets/img/icon-avaliacao.png" label="Avaliação" />
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://instagram.com">
            <img src="/assets/img/icon-instagram.png" alt="Instagram" />
          </a>
          <a href="https://facebook.com">
            <img src="/assets/img/icon-facebook.png" alt="Facebook" />
          </a>
          <a href="https://youtube.com">
            <img src="/assets/img/icon-youtube.png" alt="YouTube" />
          </a>
        </div>
        <p>
          Equipes de Nossa Senhora - Província Sul I - São Paulo Capital II -
          2025
        </p>
      </footer>
    </div>
  );
}

// Menu Item Component
function MenuItem({ icon, label }) {
  return (
    <div className="menu-item">
      <img src={icon} alt={label} className="menu-icon" />
    </div>
  );
}

export default App;
