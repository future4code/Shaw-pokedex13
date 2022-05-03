//pagina de redireccionamento


export const goToHomePage = ( navigate) => {
    navigate("/");
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToPokemonPage = (navigate, name) => {
    navigate(`/pokemon/${name}`)
}

export const goToLastPage = (navigate) => {
    navigate(-1)
}