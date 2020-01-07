import React from 'react';

import PdfViewApp from '../shared-components/PdfView/PdfViewApp';
import { verifyRoute, getCurriculum } from '../../functions/curriculum';

export default function Curriculum(){
    return (
        <>
            {verifyRoute()
                ?(<PdfViewApp 
                    file={getCurriculum()}
                    />)
                : null
            }
        </>
    );
}