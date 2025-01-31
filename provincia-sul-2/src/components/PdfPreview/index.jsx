import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './index.css';

function PdfPreview({ togglePopup, fileUrl }) {
  console.log(typeof togglePopup); // Deve registrar 'function'

  return (
    <div className="pdf-popup">
      <div className="pdf-popup-content">
        <button onClick={togglePopup} className="close-btn">Fechar</button>
        {fileUrl ? (
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={fileUrl} />
          </Worker>
        ) : (
          <p>Error: No PDF file specified.</p>
        )}
      </div>
    </div>
  );
}

export default PdfPreview;
