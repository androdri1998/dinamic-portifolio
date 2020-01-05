import React, {useEffect, useState} from 'react';
import tabsHome from '../../../../utils/tabsHome.constantes';
import TabsHomeApp from './TabsHomeApp';

export default function TabsHome({ onChange }){
    const [tab, setTab] = useState(tabsHome.SKILLS);

    useEffect(() => {
        if(onChange)
            onChange(tab);
    }, [tab]);

    function handlerAba(tabName) {
        setTab(tabName);
    }

    return (
        <TabsHomeApp 
            tab={tab}
            onClickTab={handlerAba}/>
    );
}