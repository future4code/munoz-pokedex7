import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToPokedex, goToDetails, goToHomePage } from '../router/coordinator'
<<<<<<< HEAD

=======
import {Pagina, Header, Lista, Card} from './Style/Styled'
import Pokebola from '../imagem/Pokebola.png'
import bulbasaur from '../imagem/bulbasaur.png'
import image7 from '../imagem/image7.png';
>>>>>>> componenentes-visuais-base
export const Pokedex = () => {
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

    return (
<<<<<<< HEAD
        <div>
            <h1>Página Pokedex</h1>
            <button onClick={goToHome}>Página Inicial</button>
            <button onClick={goToPokedexPage}>Pokedex</button>
            <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
        </div>
=======
        <Pagina>
        <Header>
        <h1>PokeDexPage</h1>
        <button onClick={goToHome}>Página Inicial</button>
        <img src ={Pokebola}/>
        
        <button onClick={goToPokedexPage}>Pokedex</button>
        </Header>
        
        <Lista>
            
            <Card>
            <img src ={bulbasaur}/>
            <h1>Bulbasaur</h1>
            <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
            </Card>
            
            
            <Card>
            <img src ={image7}/>
            <h1>Bulbasaur</h1>
            <button onClick={goToDetailsPage}>Detalhes do pokemon</button>
            </Card>
        </Lista>
    </Pagina>
>>>>>>> componenentes-visuais-base
    )
}