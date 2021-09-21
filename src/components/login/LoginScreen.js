import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const { dispatch } = useContext(AuthContext)
    //no lo dicen pero pienso que useContext trae al variable dispatch de un orden superior a uno inferior como este
    const handleLogin = () =>{

        const lastPath = localStorage.getItem('lastPath') || '/';//con esto guardo el path de la ultima pag visitada

        // history.push('/');//me ayuda a mandar a otra pag
        // history.replace('/');//me ayuda a no regresar a la pagina origen en este caso a "login" un ejemplo practico es logearnos y si nos devolvemos para atras no nos pida logearnos otra vez o nos muestre la paguina de loguearnos

        history.replace(lastPath);

        dispatch({
            type: types.login,
            payload:{
                name: 'Daniel'
            }
        });
    }

    return (
        <div className="container login-main">
            <h1>Logine Screen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
