import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../pages/Style/Styled'
import { useGlobalContext } from '../global/GlobalContext'
import { useHistory } from 'react-router-dom'
import { goToDetails} from '../router/coordinator'

export const PokeCard = (props) => {
    const history = useHistory()
    const [pokemonPic, setPokemonPic] = useState("")
    const { pokedex, setPokedex } = useGlobalContext()

    const getPokemonPicture = () => {
        axios.get(
            `https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`
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
    
    useEffect(() => {
        getPokemonPicture(props.pokemon.url)
    }, [pokedex])

    const addToPokedex = () => {
        setPokedex([props.pokemon, ...pokedex])
    }

    const rmvFromPokedex = () => {
        const newPokedex = pokedex.filter(pokemonOnPokedex => {
            if (pokemonOnPokedex.name !== props.pokemon.name) {
                return true
            } else {
                return false
            }
        })

        setPokedex(newPokedex)
    }

    const checkPokedex = () => {
        const pokedexContainsPokemon = pokedex.find((pokemonOnPokedex) => {
            if (pokemonOnPokedex.name === props.pokemon.name) {
                return true
            } else {
                return false
            }
        })

        return pokedexContainsPokemon
    }

    const funcResult = checkPokedex() 

    const goToDetailsPage = () => {
        goToDetails(history, props.pokemon.name)
    }

    return (
        <div>
            <Card>
                <img src={pokemonPic} />
                <h1>{props.pokemon.name}</h1>
                <button onClick={funcResult ? rmvFromPokedex : addToPokedex}>
                    {funcResult ? "Remover da Pokedex" : "Adicionar à Pokedex"}
                </button>
                <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
            </Card>
        </div>
    )
}
