import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
// import { heroes } from '../../data/heroes';

export const SearchScreen = ({ history }) => {
    //inyecto "history" para usar la funcion .push y asi cada busqueda que haga se vea reflejada en el http//:

    const location =useLocation();//usamos useLocation para no tenerlo que recibir como propidad del "SearchScreen"

    const { q = ''} = queryString.parse( location.search );//esto lo exporto y descargo con el paquete de queryString sirve para leer el formato de ?q= en caso tal me lo escriban en el http  o el propio buscador, desestructurando digo que me interesa el "q" que seria el query con el " q =''" le digo que en caso tal me lo devuelva en blanco me regrese un string vacio en lugar de undefined

    const [ { searchText }, handleInputChange]  = useForm({
        searchText: q//si escribe algo la persona y presiona enter o cambia el url el "q" se lo establesco como valor inicial a mi useForm pd:todo cambio se observa en el http no en la consola, todo este proceso se llama parcear un link(Desde uselocation hasta este punto)
    });

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);//con "useMemo" tratamos que la busqueda no se dispare sola cuando escribimos(que es lo mismo de cuando cambia el searchText)

    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${ searchText }`)
    }

    return (
        <div className="container-searchmain">
            <h1>Search Form</h1>
            <hr />
            <div className="row">

                    <div className="col-5">
                        <h4> Search Form</h4>
                        <hr />

                        <form onSubmit={ handleSearch }>
                            <input type="text"
                            name="searchText"
                            placeholder="Find your hero"
                            value={ searchText }
                            autoComplete="off"
                            onChange={ handleInputChange }
                            className="form-control"
                            />

                            <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            onClick={ handleSearch }
                            >
                                Search...
                            </button>
                        </form>
                    </div>

                    <div className="col-7">

                        <h4> Results </h4>
                        <hr />

                        {
                            (q=== '')
                                &&
                                    <div className="alert alert-info">
                                    Serach a hero
                                    </div>
                        }

                        {
                            (q !== '' && heroesFiltered.length === 0)
                                &&
                                    <div className="alert alert-danger">
                                    There is no a hero with { q }
                                    </div>
                        }

                        {
                            heroesFiltered.map( hero =>(
                                <HeroCard
                                key={hero.id}
                                { ...hero }
                                />
                            ))
                        }

                    </div>
            </div>
        </div>
    )
}
