import React, {useEffect, useState, useMemo} from 'react';
import moment from 'moment';
import './styles.scss';

export default function ItemSkill({skill, rating, description, openLink, updateAt}) {

    const starRating = useMemo(() => {
        return Array.from({length: (rating || 0)}, (v, k) => k);
    }, [rating]);

    return (
        <article className="item-skill">
            <div className="line-title-item">
                <h3 className="h3 title-skill">{skill}</h3>
                {openLink && <a href={openLink} target="_blank">
                    <i className="material-icons rating noselect">launch</i>
                </a>}
            </div>
            {rating && starRating.map((icon, index) => {
                return (<i 
                            key={index}
                            className="material-icons rating noselect">star_half</i>)
            })}
            <p className="description-skill">{description}</p>
            {openLink && <p className="date-update-repos">{moment(updateAt).format("YYYY-MM-DD hh:mm")}</p>}
        </article>
    );
}