import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { goToPokedex, goToDetails, goToHomePage } from '../router/coordinator'
import { Pagina, Header, Lista, Details } from './Style/Styled'
import { useGlobalContext } from '../global/GlobalContext'

export const PokemonDetails = (props) => {
    const [pokeDetail, setPokeDetail] = useState(undefined)
    const { pokedex, setPokedex } = useGlobalContext()
    const pathParams = useParams()
    const pokemonName = pathParams.pokemon

    const getDetail = () => {
        axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        )
            .then(response => {
                setPokeDetail(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getDetail(props.pokeDetail)
    }, [])

    const history = useHistory()

    const goToHome = () => {
        goToHomePage(history)
    }

    const goToPokedexPage = () => {
        goToPokedex(history)
    }

    const addToPokedex = () => {
        const pokemon = {
            name: pokemonName,
            url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        }
        setPokedex([pokemon, ...pokedex])
    }

    const rmvFromPokedex = () => {
        const newPokedex = pokedex.filter(pokemonOnPokedex => {
            if (pokemonOnPokedex.name !== pokemonName) {
                return true
            } else {
                return false
            }
        })

        setPokedex(newPokedex)
    }

    const checkPokedex = () => {
        const pokedexContainsPokemon = pokedex.find((pokemonOnPokedex) => {
            if (pokemonOnPokedex.name === pokemonName) {
                return true
            } else {
                return false
            }
        })

        return pokedexContainsPokemon
    }

    const funcResult = checkPokedex() 

    return (
        <Pagina>
            <Header>
                <h1>Página Pokedex</h1>
                <button onClick={goToHome}>Página Inicial</button>
                <button onClick={goToPokedexPage}>Pokedex</button>
                {/* <button onClick={goToDetailsPage}>Detalhes do pokemon</button> */}
                <button onClick={funcResult ? rmvFromPokedex : addToPokedex}>
                    {funcResult ? "Remover da Pokedex" : "Adicionar à Pokedex"}
                </button>
            </Header>
            {pokeDetail && (
                <Lista>
                    <Details>
                        <div>
                            <div className="img">
                                <img src={pokeDetail.sprites.front_default} />
                            </div>
                            <div className="img">
                                <img src={pokeDetail.sprites.back_default} />
                            </div>
                        </div>
                        <div className="status">
                            <h4>Status</h4>
                            {pokeDetail.stats.map((pokemon) => {
                                return <p>{pokemon.stat.name}: {pokemon.base_stat}</p>
                            })}
                        </div>
                        <div className="type">
                            {pokeDetail.types.map((pokemon) => {
                                return <p>Tipo: {pokemon.type.name}</p>
                            })}
                        </div>
                        <div className="moves">
                            <h4>Moves</h4>
                            {pokeDetail.moves.map((pokemon, i) => {
                                if (i < 5) {
                                    return <p>{pokemon.move.name}</p>
                                } else {

                                }

                            })}
                        </div>
                    </Details>
                </Lista>
            )}
        </Pagina>
    )
}