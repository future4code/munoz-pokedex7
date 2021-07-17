export const goToHomePage = (history) => {
    history.push("/")
}

export const goToPokedex = (history) => {
    history.push("/pokedex")
}

export const goToDetails = (history, pokemonName) => {
    history.push(`/details/${pokemonName}`)
}