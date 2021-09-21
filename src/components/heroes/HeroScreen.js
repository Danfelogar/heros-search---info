import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroesById';
// import batman from '../../../public/assets/heroes/dc-batman.jpg'; //para importar de amnera estatica

// const heroImages = require.context('../../../public/assets/heroes', true);//leguaje propio de webpack:"https://webpack.js.org/guides/dependency-management/#requirecontext"

export const HeroScreen = ({ history }) => {
    const { heroeId } = useParams();//aqui radica la magia que nos redirecciona a las tarjetas individuales de los heroes

    const hero = useMemo(() => getHeroesById( heroeId ), [heroeId]);
    // const hero = getHeroesById( heroeId );
    // console.log(hero);

    if(!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () =>{
        if(history.length <=2) {
            history.push('/');//validacion por si alguien tentra a un heroe en especifico y al devolverse no lo saque de la pag sino que lo redireccione al inicio
        }else{
            history.goBack();
        }
    }


    const{
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="heroscreen-main  row mt-5">
            <div className="col-5 mr-4">
                <img className="animate__animated animate__fadeInLeft"
                // src={batman}//basado en un import
                src={ heroImages(`./${ heroeId }.jpg`).default }//para llamar img desde otro lugar que puede ser distinto a public... pero en mi caso se quedara en public pero se usa en caso tal los .jpg se muevan
                // src={`../assets/heroes/${ heroeId }.jpg`}
                alt={ superhero } />
            </div>

            <div className="col-4 ml-4 animate__animated animate__fadeInRight">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher:</b>{ publisher }</li>
                    <li className="list-group-item"><b>First appearance:</b>{ first_appearance }</li>
                </ul>

                <h5>Characters</h5>
                <p>{ characters }</p>

                <button className="btn btn-outline-info"
                onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
