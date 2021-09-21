import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers =['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes(publisher) ){
        throw new Error(`Publisher "${ publisher }" no es correcto`)
    }//"!validPublishers.includes(publisher)" es decir si no encuentras "incluido" en publisher(que es algo que nos manda el cliente) un valor que contenga el array de validPublishers me lanzas el siguiente msm que es un error indicando lo que esta mal valga la redundancia

    return heroes.filter(hero =>hero.publisher === publisher );
    //si es valaidacion es exitosa porfa me regresas un filtro que tenga los elemenstos(o heroe) que sean extrictamente iguales al publisher dado por el cliente
}

