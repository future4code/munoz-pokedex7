import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { goToPokedex, goToDetails, goToHomePage } from '../router/coordinator'
import { Pagina, Header, Lista, Details, CardPhoto, CardImg, CardStatus,
         ContainerStatus, 
         CardMove,
         Text, 
         PokeName,
         } from './Style/Styled'
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
                <h1>P??gina Pokedex</h1>
                <button onClick={goToHome}>P??gina Inicial</button>
                <button onClick={goToPokedexPage}>Pokedex</button>
                {/* <button onClick={goToDetailsPage}>Detalhes do pokemon</button> */}
                <button onClick={funcResult ? rmvFromPokedex : addToPokedex}>
                    {funcResult ? "Remover da Pokedex" : "Adicionar ?? Pokedex"}
                </button>
            </Header>
            {pokeDetail && (
                <Lista>
                    <Details> 
                        <PokeName> 
                        <h1>{pokeDetail.name}</h1> 
                        </PokeName>            
                        <ContainerStatus>
                        <CardStatus>
                            <h4>Status</h4>
                            {pokeDetail.stats.map((pokemon) => {
                                return <p>{pokemon.stat.name}: {pokemon.base_stat}</p>
                            })}
                        </CardStatus>
                        <CardImg>
                            <CardPhoto className="img">
                                <img src={pokeDetail.sprites.back_default} />
                            </CardPhoto>
                            <CardPhoto className="img">
                                <img src={pokeDetail.sprites.front_default} />
                            </CardPhoto>
                            
                        </CardImg>
                        <CardMove>
                        <Text>
                             {pokeDetail.types.map((pokemon) => {
                                return <p>Tipo: {pokemon.type.name}</p>
                            })}
                            </Text>
                            <h4>Moves</h4>
                            {pokeDetail.moves.map((pokemon, i) => {
                                if (i < 5) {
                                    return <p>{pokemon.move.name}</p>
                                } else {
                                }
                            })}
                         
                        </CardMove>
                        
                        </ContainerStatus>
                    </Details>
                </Lista>
            )}
        </Pagina>
    )
}