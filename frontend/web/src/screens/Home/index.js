import React, {useEffect, useState} from 'react';
import HeaderHome from './components/HeaderHome';
import ItemSkill from './components/ItemSkill';

import './styles.scss';
import {
    getSkills,
    getGithubRepositories,
    getGithubUsername,
    getProfilePhoto,
    getDescription,
    getName
} from '../../functions/getsData';

export default function Home() {
    const [repositorios, setRepositorios] = useState(null);
    const [render, setRender] = useState("skills");
    const [renderData, setRenderData] = useState(getSkills());
    useEffect(() => {
        async function getRepositorios(){
            const response = await getGithubRepositories(getGithubUsername());
            
            setRepositorios((response || null));
        }

        getRepositorios();
    },[]);

    function handlerAba(aba) {
        setRender(aba);

        if(aba === "skills"){
            setRenderData(getSkills());
        }else if( aba === "git"){
            setRenderData(repositorios);
        }
    }
    return (
        <section className="content-home">
            <div className="flex-header column">
                <section className="flex row align-center">
                    <div className="container-profile">
                        {getProfilePhoto()
                            ? (<img 
                            className="img-header-home"
                            src={getProfilePhoto()}/>)
                            : (<h1 className="h1">{getName().substr(0,1)}</h1>)}
                    </div>
                    <HeaderHome />
                </section>
                <article className="container-description">
                    {getDescription() && <p className="description-profile">{getDescription()}</p>}
                </article>
            </div>
            <section className="flex column items-home">
                <div className="buttons-line">
                    <button
                        className={render === "skills"? "selectedTab":"noSelectedTab"}
                        onClick={()=>{handlerAba("skills")}}
                        style={{marginRight:5}}>Skills</button>
                    {repositorios && <button
                        className={render === "git"? "selectedTab":"noSelectedTab"}
                        onClick={()=>{handlerAba("git")}}
                        style={{marginLeft:5}}>Git</button>}
                </div>
                <section className="grid grid-template-column items-render">
                    {renderData &&
                        renderData.map((e, index) => {
                            return (
                                <ItemSkill
                                    key={index} 
                                    skill={render === "skills" ? e.skill: e.name}
                                    description={e.description}
                                    rating={e.rating}
                                    updateAt={e.updated_at}
                                    openLink={e.html_url}
                                    />
                            )
                        })
                    }
                </section>
            </section>
        </section>
    );
}