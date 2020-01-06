import React from 'react';

import CurriculumPdf from '../../database/curriculum.pdf';
import PdfViewApp from '../shared-components/PdfView/PdfViewApp';

export default function Curriculum(){
    return (
        <PdfViewApp 
            file={CurriculumPdf}
            />
    );
}