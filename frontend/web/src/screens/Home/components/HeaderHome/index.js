import React from 'react';
import {Link} from 'react-router-dom';

import './styles.scss';
import {
    getWorking,
    getWorkingSubtitle,
    getInstagram,
    getMail,
    getLinkedin
} from '../../../../functions/getsData';
import { urls } from '../../../../utils/urls.constants';

export default function HeaderHome() {
    return (
        <header className="header-home">
            <div className="line-title-work">
                <h2 className="h2 title-home-index">{getWorking()}</h2>
                <Link to={urls.ABOUT} target="_blank">
                    <i className="material-icons noselect">link</i>
                </Link>
            </div>
            <h6 className="h6 title-home-second">{getWorkingSubtitle()}</h6>
            {(getMail() || getLinkedin() || getInstagram()) && <section className="line-social">
                {getMail() && <a href={`mailto:${getMail()}`} target="_top"><p className="mail">Talk me</p></a>}
                {getLinkedin() && <a href={getLinkedin()} target="_blank"><p>LinkedIn</p></a>}
                {getInstagram() && <a href={getInstagram()} target="_blank"><p>Instagram</p></a>}
            </section>}
        </header>
    );
}