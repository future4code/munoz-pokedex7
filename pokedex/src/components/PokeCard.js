import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../pages/Style/Styled'
import { useGlobalContext } from '../global/GlobalContext'
import { useHistory } from 'react-router-dom'
import {goToDetails} from '../router/coordinator'

export const PokeCard = (props) => {
    const history = useHistory()
    const [pokemonPic, setPokemonPic] = useState("")
    const { pokedex, setPokedex } = useGlobalContext()

    const goToDetailsPage = () => {
        goToDetails(history)
    }
    const getPokemonPicture = (pokemonUrl) => {
        axios.get(
            pokemonUrl
        )
            .then(response => {
                setPokemonPic(response.data.sprites.front_default)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPokemonPicture(props.pokemon.url)
    }, [])

    const addToPokedex = () => {
        setPokedex([...pokedex, props.pokemon])
    }

    const rmvFromPokedex = () => {
        const newPokedex = pokedex.filter(pokemonOnPokedex => {
            if (pokemonOnPokedex !== props.pokemon) {
                return true
            } else {
                return false
            }
        })

        setPokedex(newPokedex)
    }

    const checkPokedex = (pokemon) => {
        const pokedexContainsPokemon = pokedex.find((pokemonOnPokedex) => {
            if (pokemonOnPokedex === pokemon) {
                return true
            } else {
                return false
            }
        })

        return pokedexContainsPokemon
    }

    const funcResult = checkPokedex(props.pokemon) 

    return (
        <div>
            <Card>
                <img src={pokemonPic} />
                <h1>{props.pokemon.name}</h1>
                <button onClick={funcResult ? rmvFromPokedex : addToPokedex}>
                    {funcResult ? "Remover da Pokedex" : "Adicionar à Pokedex"}
                </button><p></p>
                <a onClick={goToDetailsPage}>Detalhes do pokemon</a>
            </Card>
        </div>
    )
}
