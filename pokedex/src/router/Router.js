import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { Pokedex } from '../pages/PokedexPage'
import { PokemonDetails } from '../pages/PokemonDetailsPage'
import { ErrorPage } from '../pages/ErrorPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/pokedex"}>
                    <Pokedex />
                </Route>

                <Route exact path={"/details/:pokemon"}>
                    <PokemonDetails />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}