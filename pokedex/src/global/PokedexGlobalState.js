import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'

export const PokedexGlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])

    const context = {
        pokedex: pokedex,
        setPokedex: setPokedex
    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}