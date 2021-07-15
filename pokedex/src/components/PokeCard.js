import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from '../pages/Style/Styled'
import { useGlobalContext } from '../global/GlobalContext'

export const PokeCard = (props) => {
    const [pokemonPic, setPokemonPic] = useState("")
    const { pokedex, setPokedex } = useGlobalContext()
    const [ onPokedex, setOnPokedex ] = useState(false)

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

    const addToPokedex = () => {
        setPokedex([...pokedex, props.pokemon])
        setOnPokedex(true)
    }

    const rmvFromPokedex = () => {
        const newPokedex = pokedex.filter(pokemonOnPokedex => {
            if(pokemonOnPokedex !== props.pokemon) {
                return true
            } else {
                return false
            }
        })

        setPokedex(newPokedex)
        setOnPokedex(false)
    }

    return (
        <div>
            <Card>
                <img src={pokemonPic} />
                <h1>{props.pokemon.name}</h1>
                <button onClick={onPokedex ? rmvFromPokedex : addToPokedex}>
                    {onPokedex ? "Remover da Pokedex" : "Adicionar à Pokedex"}
                </button>
                {/* <button onClick={goToDetailsPage}>Detalhes do pokemon</button> */}
            </Card>
        </div>
    )
}