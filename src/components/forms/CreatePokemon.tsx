import { useState } from "react";
import createPokemonTable from "../../services/create-pokemon-table";
import "./create.css";

type PokemonDataAttr = {
  name: string;
  image: string;
  attack: number;
  defense: number;
  hp: number;
  type: string;
  idAuthor: number;
};

export const CreatePokemon = (addPokemonTable: any): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<unknown>();
  const [pokemonData, setPokemonData] = useState<PokemonDataAttr>({
    name: "",
    image: "",
    attack: 0,
    defense: 0,
    hp: 1,
    type: "Base",
    idAuthor: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonData({ ...pokemonData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      createPokemonTable.createPokemonTable(pokemonData);
      addPokemonTable({ ...pokemonData });
    } catch (e) {
      setErrorMessage(e);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
    setPokemonData({
      ...pokemonData,
      name: "",
      image: "",
      attack: 0,
      defense: 0,
    });
    alert("Creacion exitosa");
  };

  const handleCancelButton = () => {
    setPokemonData({
      ...pokemonData,
      name: "",
      image: "",
      attack: 0,
      defense: 0,
    });
  };

  return (
    <section className="container_create">
      <h2 className="create_title" data-testid="create__title">
        Nuevo Pokemon
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="container_form">
          <div>
            <label>
              Nombre:
              <input
                type="text"
                data-testid="create__name"
                id="name"
                name="name"
                autoComplete="off"
                onChange={handleInputChange}
                value={pokemonData.name}
                required
              />
            </label>
            <label>
              Imagen:
              <input
                type="text"
                data-testid="create__image"
                id="image"
                name="image"
                autoComplete="off"
                placeholder="url"
                onChange={handleInputChange}
                value={pokemonData.image}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Ataque: {0}
              <input
                id="range"
                type="range"
                name="attack"
                data-testid="create__attack"
                min="0"
                max="100"
                value={pokemonData.attack}
                onChange={handleInputChange}
                step="1"
              />
              {pokemonData.attack}
            </label>
            <label>
              Defensa: {0}
              <input
                id="range"
                type="range"
                name="defense"
                data-testid="create__defense"
                min="0"
                max="100"
                value={pokemonData.defense}
                onChange={handleInputChange}
                step="1"
              />
              {pokemonData.defense}
            </label>
          </div>
        </div>
        <div className="buttons_container">
          <button
            data-testid="create__save__button"
            style={{
              marginRight: "3px",
            }}
          >
            Guardar
          </button>
          <button
            onClick={handleCancelButton}
            data-testid="create__cancel__button"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};
