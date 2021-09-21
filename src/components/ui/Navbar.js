import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext(AuthContext);
    //useContext=> me facilita la informacion en el arbol decomponente
    //usecontext para traer un "value" de orden superior para uno de orden inferior como este....

    const history = useHistory();
    //todo esto para poder usar el hook de history ya que el navbar al no estar en rutado en el "dashboardrouter" requiere de este componente o informacion history para hacer funcionar el logout

    const handleLogout = () =>{

    history.replace('/login');

        dispatch({
            type: types.logout,
        })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info" > { name } </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}