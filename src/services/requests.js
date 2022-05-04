import axios from "axios";

export async function getPokemonDetail(url, setPokemon) {
    try {
            let response = await axios.get(url); 
            setPokemon(response.data)

    } catch (error) {
        alert("error!", error)
    }
}