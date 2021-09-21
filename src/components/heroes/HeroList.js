import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    // si cambia mi publisher quiero que memorices esta fucion y la ejecutes mas rapido para no sentir depreciacion
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-row animate__animated animate__backInUp">
            {
                heroes.map( hero =>(
                    <HeroCard
                    key={hero.id}
                    { ...hero }/>//digo extraiga cada una de las propiedades para manadarlas a herocards
                ))
            }
        </div>
    )
}
