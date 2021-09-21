import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false };
}


export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {  }, init);

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));
    }, [user])//con esto logro que el name se quede sin importar que tanto recargue la pantalla

    return (

        <AuthContext.Provider value={ { user,dispatch } }>
            <AppRouter />
        </AuthContext.Provider>

    )
}
