import React, {useEffect, useState} from 'react';
import HomeApp from './HomeApp';
import tabsHome from '../../utils/tabsHome.constantes';
import {
    getSkills,
    getGithubRepositories,
    getGithubUsername,
} from '../../functions/getsData';

export default function Home() {
    const [repositorios, setRepositorios] = useState(null);
    const [tab, setTab] = useState(tabsHome.SKILLS);
    const [renderData, setRenderData] = useState(getSkills());
    
    useEffect(() => {
        if(getGithubUsername()){
            async function getRepositorios(){
                const response = await getGithubRepositories(getGithubUsername());   
                setRepositorios((response || null));
            }
            getRepositorios();
        }
    },[]);

    function handlerTab(tabName) {
        setTab(tabName);
        if(tabName === tabsHome.SKILLS){
            setRenderData(getSkills());
        }else if( tabName === tabsHome.GIT){
            setRenderData(repositorios);
        }
    }

    return (
        <HomeApp 
            onChangeTab={handlerTab}
            data={renderData}
            tab={tab}
            />
    );
}