import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToPokedex, goToDetails, goToHomePage } from '../router/coordinator'
import { Pagina, Header, Lista, Card } from './Style/Styled'
import Pokebola from '../imagem/Pokebola.png'
import bulbasaur from '../imagem/bulbasaur.png'
import image3 from '../imagem/image3.png';
import image4 from '../imagem/image4.png';
import image5 from '../imagem/image5.png';
import image6 from '../imagem/image6.png';
import image7 from '../imagem/image7.png';
import { useRequestData } from '../hooks/useRequestData'
import { PokeCard } from '../components/PokeCard'

// <h1>Página inicial da lista de pokemons</h1>// 

export const HomePage = () => {
    const history = useHistory()
    const pokemonList = useRequestData('/?limit=30&offset=30', 'results')


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
                <button onClick={goToHome}>Página Inicial</button>
                <img src={Pokebola} />

                <button onClick={goToPokedexPage}>Pokedex</button>
            </Header>

            <Lista>
                {pokemonList.length && pokemonList.map(pokemon => {
                    return (
                            <PokeCard pic={image7} pokemon={pokemon} />
                    )
                })}
            </Lista>
        </Pagina>
    )
}
{/* <div>
                <Card>
                <img src ={image4}/>
                <h1>Bulbasaur</h1>
                <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
                </Card>
                </div>

                <Card>
                <img src ={image5}/>
                <h1>Bulbasaur</h1>
                <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
                </Card>

                <Card>
                <img src ={image3}/>
                <h1>Bulbasaur</h1>
                <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
                </Card>

                <Card>
                <img src ={image6}/>
                <h1>Bulbasaur</h1>
                <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
                </Card>

                
                <Card>
                <img src ={image7}/>
                <h1>Bulbasaur</h1>
                <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
                </Card>



                <Card>
                <img src ={bulbasaur}/>
                <h1>Bulbasaur</h1>
                <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
                </Card> */}

