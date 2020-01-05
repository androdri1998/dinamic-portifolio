import React, {useState, useEffect} from 'react';
import ItemSkill from '../../Home/components/ItemSkill';
import tabsHome from '../../../utils/tabsHome.constantes';

import './styles.scss';

export default function ListItemsGrid({data, tab}){
    return (
        <section className="grid grid-template-column items-render">
            {data &&
                data.map((item, index) => {
                    return (
                        <ItemSkill
                            key={index} 
                            skill={tab === tabsHome.SKILLS ? item.skill: item.name}
                            description={item.description}
                            rating={item.rating}
                            updateAt={item.updated_at}
                            openLink={item.html_url}
                            />
                    )
                })
            }
        </section>
    );
}