import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPokedex, goToDetails, goToHomePage } from '../router/coordinator'

export const PokemonDetails = () => {
    const history = useHistory()

    const goToHome = () => {
        goToHomePage(history)
    }

    const goToPokedexPage = () => {
        goToPokedex(history)
    }

    const goToDetailsPage = () => {
        goToDetails(history)
    }

    return (
        <div>
            <h1>Página de detalhes do pokemon</h1>
            <button onClick={goToHome}>Página Inicial</button>
            <button onClick={goToPokedexPage}>Pokedex</button>
            <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
        </div>
    )
}