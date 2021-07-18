import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (params, result) => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get(
            `https://pokeapi.co/api/v2/pokemon${params}`
        )
            .then(response => {
                setData(response.data[result])
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}