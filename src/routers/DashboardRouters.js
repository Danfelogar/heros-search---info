import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DCScreen } from '../components/dc/DCScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRouters = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2 wrapper-main">
                <Switch>
                    <Route exact path="/search" component= { SearchScreen } />
                    <Route exact path="/marvel" component= { MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component= { HeroScreen } />{/*Que significa el :heroeId facil que eso es lo que recive como argumento */}
                    <Route exact path="/dc" component= { DCScreen } />

                    <Redirect to="/search" />
                </Switch>
            </div>
        </>
    )
}
