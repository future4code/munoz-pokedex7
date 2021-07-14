import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { goToPokedex, goToDetails, goToHomePage } from '../router/coordinator'
import {Pagina, Header, Lista, Details} from './Style/Styled'
import bulbasaur from '../imagem/bulbasaur.png'

export const PokemonDetails = (props) => {

    const [pokeDetail, setPokeDetail] = useState(undefined)

    const pathParams = useParams()
    const id = pathParams.id

    const getDetail = (pokeName) => {
        axios.get(
            `https://pokeapi.co/api/v2/${id}`
        )
            .then(response => {
                setPokeDetail(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(()=>{
        getDetail()
      },[])

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

    console.log(pokeDetail)

    return (  
        <Pagina>
        <Header>
        <h1>Página Pokedex</h1>
        <button onClick={goToHome}>Página Inicial</button>
        <button onClick={goToPokedexPage}>Pokedex</button>
        <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
        </Header>
        {pokeDetail && (
        <Lista>
        <Details>
            <div>
                <div className='img'>
                    <img src={pokeDetail.sprites.front_default} />
                </div>
                <div className='img'>
                    <img src={pokeDetail.sprites.back_default} />
                </div>
            </div>
            <div className="status"> 
            <h4>Status</h4>
              {pokeDetail.stats.map((pokemon)=>{
                return <p>{pokemon.stat.name}: {pokemon.base_stat}</p>
              })}
            <h1>Bulbasaur</h1>
            </div>
            <div className="type">
             {pokeDetail.types.map((pokemon)=>{
                return <p>Tipo: {pokemon.type.name}</p>
              })}
            </div>
            <div className="moves">
            <h4>Moves</h4>
                {pokeDetail.moves.map((pokemon,i)=>{
                  if(i<5){
                    return <p>{pokemon.move.name}</p>
                  }else{

                  }
                
              })}
            </div>   
        </Details>
        </Lista>
        )}
    </Pagina>
    )
}