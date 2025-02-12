import "./App.css";
import Header from "./components/Header";
import PdfPreview from "./components/PdfPreview";
import { useEffect, useState } from "react";
import MenuLateral from './components/MenuLateral';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isPdfOpen, setPdfOpen] = useState(false);
  const [pdfFileUrl, setPdfFileUrl] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const togglePdfViewer = (fileUrl) => {
    setPdfFileUrl(fileUrl);
    setPdfOpen(!isPdfOpen);
  };

  useEffect(() => {
    // Handle scroll effect for the event logo
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const logoElement = document.querySelector(".event-logo");
      if (logoElement) {
        logoElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
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

  console.log(typeof togglePdfViewer); // Deve registrar 'function'

  return (
    <div className="app">
      <div className="event-logo-frame">
        <div className="event-logo" />
      </div>
      {/* Header */}
      <Header togglePdfViewer={togglePdfViewer} />

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
        <a className="item" href="#" onClick={(event) => { event.preventDefault(); togglePdfViewer('/assets/pdf/Programação Eacre 2025.pdf'); }}>
          <MenuItem
            icon="/assets/img/icon-programacao.png"
            label="Programação"
          />
        </a>
        <a className="item" href="#" onClick={(event) => { event.preventDefault(); togglePdfViewer('/assets/pdf/Caderno Eacre 2025.pdf'); }}>
          <MenuItem
            icon="/assets/img/icon-caderno.png"
            label="Caderno do Encontro"
          />
        </a>
        <a className="item" href="#" onClick={(event) => { event.preventDefault(); togglePdfViewer('/assets/pdf/Grupos de Reflexão-  EACRE 2025.pdf'); }}>
          <MenuItem icon="/assets/img/icon-grupos.png" label="Grupos" />
        </a>
        <a className="item" href="https://docs.google.com/forms/d/e/1FAIpQLSdu7g_wG7-8QaHFnLLtbVAdt398RZqfgkep0-qcHRSeb9jEpg/viewform">
          <MenuItem
            icon="/assets/img/icon-duvidas.png"
            label="Dúvidas para Plenária"
          />
        </a>
        <a className="item" href="https://photos.app.goo.gl/2V2iVw1itDzwp1DU8">
          <MenuItem icon="/assets/img/icon-fotos.png" label="Ver Fotos" />
        </a>
        <a className="item" href="https://photos.app.goo.gl/2V2iVw1itDzwp1DU8">
          <MenuItem icon="/assets/img/icon-camera.png" label="Enviar Fotos" />
        </a>
      </section>

      <section className="submenu">
        <a className="subitem" href="https://docs.google.com/forms/d/1wYNB6wMPcuaRSKQPMYodkEAfuWNjbhhzfb7en3V0OXc/edit">
          <MenuItem icon="/assets/img/icon-avaliacao.png" label="Avaliação" />
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src="/assets/img/logo.png" alt="Logo" className="footer-logo" />
        <div className="social-icons">
          <a href="https://www.instagram.com/ensbrasil">
            <img src="/assets/img/icon-instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/ENSSRBRASIL/">
            <img src="/assets/img/icon-facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/@equipesdenossasenhora">
            <img src="/assets/img/icon-youtube.png" alt="YouTube" />
          </a>
        </div>
        <p>
          Equipes de Nossa Senhora - Província Sul I - São Paulo Capital II -
          2025
        </p>
      </footer>

      {/* PDF Viewer Popup */}
      {isPdfOpen && <PdfPreview togglePopup={() => setPdfOpen(false)} fileUrl={pdfFileUrl} />}

      <MenuLateral isOpen={isMenuOpen} toggleMenu={toggleMenu} togglePdfViewer={togglePdfViewer} />
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
