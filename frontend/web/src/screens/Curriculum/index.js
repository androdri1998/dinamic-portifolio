import React from 'react';

import CurriculumPdf from '../../database/curriculum.pdf';
import PdfView from '../shared-components/PdfView';

export default function Curriculum(){
    return (
        <PdfView 
            file={CurriculumPdf}
            />
    );
}