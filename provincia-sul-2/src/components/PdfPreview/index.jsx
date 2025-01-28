import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './index.css';

function PdfPreview({ togglePopup }) {
  console.log(typeof togglePopup); // Deve registrar 'function'

  return (
    <div className="pdf-popup">
      <div className="pdf-popup-content">
        <button onClick={togglePopup} className="close-btn">Fechar</button>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/assets/pdf/Grupos de Reflexão- EACRE 2025.pdf" />
        </Worker>
      </div>
    </div>
  );
}

export default PdfPreview;
