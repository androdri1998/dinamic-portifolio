import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import CurriculumPdf from '../../database/curriculum.pdf';

export default function Curriculum(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={CurriculumPdf}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}