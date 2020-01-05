import React, {useEffect, useState} from 'react';
import ContentProfile from '../shared-components/ContentProfile';
import TabsHome from './components/TabsHome';
import ListItemsGrid from '../shared-components/ListItemsGrid';
import './styles.scss';

export default function HomeApp({ onChangeTab, data, tab }){
    return (
        <section className="content-home">
            <ContentProfile />
            <section className="flex column items-home">
                <TabsHome 
                    onChange={(tab) => { if(onChangeTab) onChangeTab(tab)}}
                    />
                <ListItemsGrid
                    data={data}
                    tab={tab}
                    />
            </section>
        </section>
    );
}