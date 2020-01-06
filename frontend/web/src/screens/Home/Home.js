import React, {useEffect, useState} from 'react';
import ContentProfile from '../shared-components/ContentProfile';
import TabsHomeApp from './components/TabsHome/TabsHomeApp';
import ListItemsGrid from '../shared-components/ListItemsGrid';
import './styles.scss';

export default function Home({ onChangeTab, data, tab }){
    return (
        <section className="content-home">
            <ContentProfile />
            <section className="flex column items-home">
                <TabsHomeApp
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