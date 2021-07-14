import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from '../pages/Style/Styled'

export const PokeCard = (props) => {
    const [pokemonPic, setPokemonPic] = useState("")
    
    const getPokemonPicture = (pokemonUrl) => {
        axios.get(
            pokemonUrl
        )
            .then(response => {
                console.log(response.data.sprites.front_default)
                setPokemonPic(response.data.sprites.front_default)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPokemonPicture(props.pokemon.url)
    }, [])

    

    return (
        <div>
            <Card>
                <img src={pokemonPic} />
                <h1>{props.pokemon.name}</h1>
                <button onClick={props.addPokedex}>Adicionar à Pokedex</button>
            </Card>
        </div>
    )
}