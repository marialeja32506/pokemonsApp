import axios from "axios"

const EDIT_POKEMON_URL = "https://bp-pokemons.herokuapp.com/";

type PokemonAttr = {
    name: string;
    image: string;
    attack: number;
    defense: number;
    hp: number;
    type: string;
    idAuthor: number;
  };


const editPokemonTable = async (id:number, pokemon:PokemonAttr) => {
    const {data} = await axios.put(`${EDIT_POKEMON_URL}${id}`, pokemon)
    return data;
}

export default {editPokemonTable}