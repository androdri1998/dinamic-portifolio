import React, {useState} from 'react';
import PdfView from './PdfView';

import './styles.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';

export default function PdfViewApp({ file }){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }

    function increment(){
        if(pageNumber < numPages){
            let auxSum = pageNumber+1;
            setPageNumber(auxSum);
        }
    }

    function decrement(){
        if(pageNumber > 1){
            let auxSub = pageNumber-1;
            setPageNumber(auxSub);
        }
    }

    return (
        <PdfView 
            file={file}
            onDocumentLoadSuccess={onDocumentLoadSuccess}
            pageNumber={pageNumber}
            numPages={numPages}
            decrement={decrement}
            increment={increment}
            />
    );
}