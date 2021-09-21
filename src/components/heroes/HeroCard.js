import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="cards-wrapper">
            <div className="card">
                <div className="card-img-wrapper">
                    <img
                    src={ heroImages(`./${ id }.jpg`).default }
                    // src={ `./assets/heroes/${ id }.jpg` }
                    className="card-img" alt={ superhero }/>
                </div>
                <div className="card-information">
                    <h2>{ superhero }</h2>
                    <h3>{ alter_ego }</h3>
                    {
                        (alter_ego !== characters) && <p>{ characters }</p>
                    }
                    <p>{ first_appearance }</p>
                    <button>
                    <Link to={ `./hero/${ id }` } className="btn-more">
                        Mas...
                    </Link>
                    </button>
                </div>
            </div>

        </div>
    )
}









            // <div className="row no-gutters">
            //     <div className="col-md-4">
            //         <img src={ `./assets/heroes/${ id }.jpg` } className="card-img" alt={ superhero } />
            //     </div>
            //     <div className="col-md-8">
            //         <h5 className="card-tittle">{ superhero }</h5>
            //         <p className="card-text">
            //             { alter_ego }
            //         </p>
            //         {
            //             (alter_ego !== characters) && <p className="card-text">{ characters }</p>
            //         }
            //         {/* }con esto evaluameos que si los characters es diferente de alter_ego me renderice lo que esta despues de "&&" */}
            //         <p className="card-text">{ first_appearance }</p>
            //         <Link to={ `./hero/${ id }` }>
            //             Mas...
            //         </Link>
            //     </div>
            // </div>