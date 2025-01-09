import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <img
        src="/assets/img/logo-eacre.png"
        alt="EACRE logo"
        className="event-logo"
      />
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
        <a className="item" href="">
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
          <MenuItem icon="/assets/img/icon-mapa.png" label="Mapa das Salas" />
        </a>
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
