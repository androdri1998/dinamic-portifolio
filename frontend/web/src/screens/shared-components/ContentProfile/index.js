import React, {useEffect, useState} from 'react';
import HeaderHome from '../../Home/components/HeaderHome';
import {
    getProfilePhoto,
    getDescription,
    getName
} from '../../../functions/getsData';

import './styles.scss';

export default function ContentProfile(){
    return (
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
    );
}