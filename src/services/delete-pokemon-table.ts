import axios from "axios"

const DELETE_POKEMON_URL = "https://bp-pokemons.herokuapp.com/";



const deletePokemonTable = async (id: number) => {
    const {data} = await axios.delete(`${DELETE_POKEMON_URL}${id}`)
    return data;
}

export default {deletePokemonTable}