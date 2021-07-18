import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToPokedex, goToHomePage } from '../router/coordinator'
import { Pagina, Header, Lista, Card } from './Style/Styled'
import Pokebola from '../imagem/Pokebola.png'
import { PokeCard } from '../components/PokeCard'


// <h1>Página inicial da lista de pokemons</h1>// 

export const HomePage = () => {
    const history = useHistory()
    const [pokemonList, setPokemonList] = useState([])
    
    const goToHome = () => {
        goToHomePage(history)
    }

    const goToPokedexPage = () => {
        goToPokedex(history)
    }

    const getPokemon = () => {
        axios.get(
            `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=1`
        )
            .then(response => {
                setPokemonList(response.data.results)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPokemon() 
    }, [])

    return (
        <Pagina>
            <Header>
                <button onClick={goToHome}>Página Inicial</button>
                <img src={Pokebola} />

                <button onClick={goToPokedexPage}>Pokedex</button>
            </Header>

            <Lista>
                {pokemonList.length && pokemonList.map(pokemon => {
                    return (
                            <PokeCard pokemon={pokemon} />
                    )
                })}
            </Lista>
        </Pagina>
    )
}

