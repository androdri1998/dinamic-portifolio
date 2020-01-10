import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { getName } from './functions/getsData';
import Routes from './routes/routes';
import { latoutConstants } from './database/configFrontend';

export default function Layout(){
    const layout = useSelector((state) => state.layoutReducer.layout);

    return (
        <div className="App">
            {layout === latoutConstants.LAYOUT_1 && (
                <>
                    <header className="header-default">
                        {getName()}
                    </header>
                    <div className="content-body">
                        <Routes />
                    </div>
                </>
            )}
        </div>
    );
}