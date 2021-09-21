import React, { useContext } from 'react';
import {
BrowserRouter as Router,
Switch,
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRoute';

export const AppRouter = () => {

    const { user }  = useContext(AuthContext);

    return (
        <Router>
            <div className="wrapper-main2">
                <Switch>
                    <PublicRouter
                    exact
                    path="/login"
                    component={ LoginScreen }
                    isAuthenticated={ user.logged }
                    />

                    <PrivateRouter
                    path="/"
                    component={ DashboardRouters }
                    isAuthenticated={ user.logged }
                    />
                </Switch>{/* lo que pasa es que con el exact no muestra nadad por lo que es necesario quitarselo al path */}
                {/*para la privatizacion de mis rutas comenzare por actualizar el path="/" y poder proteger mis rutas de gente que no se halla logeado */}
            </div>
        </Router>
    )
}

