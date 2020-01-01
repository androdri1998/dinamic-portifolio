import React from 'react';
import './styles.scss';
import {
    getWorking,
    getWorkingSubtitle,
    getInstagram,
    getMail,
    getLinkedin
} from '../../../../functions/getsData';

export default function HeaderHome() {
    return (
        <header className="header-home">
            <h2 className="h2 title-home-index">{getWorking()}</h2>
            <h6 className="h6 title-home-second">{getWorkingSubtitle()}</h6>
            {(getMail() || getLinkedin() || getInstagram()) && <section className="line-social">
                {getMail() && <a href={`mailto:${getMail()}`} target="_top"><p className="mail">Talk me</p></a>}
                {getLinkedin() && <a href={getLinkedin()} target="_blank"><p>LinkedIn</p></a>}
                {getInstagram() && <a href={getInstagram()} target="_blank"><p>Instagram</p></a>}
            </section>}
        </header>
    );
}