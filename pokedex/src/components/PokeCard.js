import React from 'react'
import { Card } from '../pages/Style/Styled'

export const PokeCard = (props) => {
    return (
        <div>
            <Card>
                <img src={props.pic} />
                <h1>{props.pokemon.name}</h1>
                {/* <button onClick={goToDetailsPage}>Detalhes do pokemon</button> */}
            </Card>
        </div>
    )
}