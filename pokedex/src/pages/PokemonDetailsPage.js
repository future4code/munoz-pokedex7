import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPokedex, goToDetails, goToHomePage } from '../router/coordinator'
import {Pagina, Header, Lista, Details} from './Style/Styled'
import bulbasaur from '../imagem/bulbasaur.png'

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
        
        <Pagina>
        <Header>
        <h1>Página Pokedex</h1>
        <button onClick={goToHome}>Página Inicial</button>
        <button onClick={goToPokedexPage}>Pokedex</button>
        <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
        </Header>
        <Lista>
        <Details>
            <img src={bulbasaur}/>
            <h1>Bulbasaur</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Details>
        </Lista>
    </Pagina>
    )
}