import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToPokedex, goToDetails, goToHomePage } from '../router/coordinator'
import {Pagina, Header, Lista, Details} from './Style/Styled'
import bulbasaur from '../imagem/bulbasaur.png'

export const PokemonDetails = (props) => {

    const [pkmList, setPkmList] = useState([])

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

    const getinfo = (pokeName) => {
        axios.get(
            `https://pokeapi.co/api/v2/pokemon/12/`
        )
            .then(response => {
                setPkmList({pkmList: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect (() => {
        getinfo(props.pkmList)
    },[props.pkmList])

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
        {pkmList.sprites && (
          <img src={pkmList.sprites.front_default} alt={pkmList.name} />
        )}
            <h1>Bulbasaur</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Details>
        </Lista>
    </Pagina>
    )
}