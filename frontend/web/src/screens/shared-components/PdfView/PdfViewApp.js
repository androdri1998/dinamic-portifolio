import React, {useState, useEffect} from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import './styles.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';

export default function PdfViewApp({ file, onDocumentLoadSuccess, pageNumber, numPages, decrement, increment }){
    return (
        <div className="container-curriculum">
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page 
                    size="A4" 
                    pageNumber={pageNumber}
                    renderTextLayer={false} 
                />
            </Document>
            <div className="line-pages">
                <button onClick={decrement}><i className="material-icons noselect">keyboard_arrow_left</i></button>
                <p>Página {pageNumber} de {numPages}</p>
                <button onClick={increment}><i className="material-icons noselect">keyboard_arrow_right</i></button>
            </div>
        </div>
    );
}