import axios from "axios"

const CREATE_POKEMON_URL = "https://bp-pokemons.herokuapp.com/?idAuthor=1";

type PokemonAttr = {
    name: string;
    image: string;
    attack: number;
    defense: number;
    hp: number;
    type: string;
    idAuthor: number;
  };

const createPokemonTable = async (pokemon: PokemonAttr) => {
    const {data} = await axios.post(CREATE_POKEMON_URL, pokemon)
    return data;
}

export default {createPokemonTable}