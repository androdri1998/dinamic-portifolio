import React, {useEffect, useState} from 'react';
import tabsHome from '../../../../utils/tabsHome.constantes';
import TabsHome from './TabsHome';

export default function TabsHomeApp({ onChange }){
    const [tab, setTab] = useState(tabsHome.SKILLS);

    useEffect(() => {
        if(onChange)
            onChange(tab);
    }, [tab]);

    function handlerAba(tabName) {
        setTab(tabName);
    }

    return (
        <TabsHome 
            tab={tab}
            onClickTab={handlerAba}/>
    );
}