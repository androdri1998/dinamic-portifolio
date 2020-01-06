import React, {useEffect, useState} from 'react';
import tabsHome from '../../../../utils/tabsHome.constantes';
import { getGithubUsername } from '../../../../functions/getsData';

import './styles.scss';

export default function TabsHome({ tab, onClickTab }){
    return (
        <div className="buttons-line">
            <button
                className={tab === tabsHome.SKILLS? "selectedTab":"noSelectedTab"}
                onClick={()=>{if(onClickTab) onClickTab(tabsHome.SKILLS)}}
                style={{marginRight:5}}>Skills</button>
            {getGithubUsername() && <button
                className={tab === tabsHome.GIT? "selectedTab":"noSelectedTab"}
                onClick={()=>{if(onClickTab) onClickTab(tabsHome.GIT)}}
                style={{marginLeft:5}}>Git</button>}
        </div>
    )
}