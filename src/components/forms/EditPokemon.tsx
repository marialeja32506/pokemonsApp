import { useState } from "react";
import "./edit.css";

type PokemonDataAttr = {
  name?: string;
  image?: string;
  attack?: number;
  defense?: number;
  hp: number;
  type: string;
  idAuthor: number;
};

export const EditPokemon = ({
  editPokemon,
  currentPokemon,
}: any): React.ReactElement => {
  const [editPokemonData, setEditPokemonData] = useState<PokemonDataAttr>({
    name: currentPokemon?.name,
    image: currentPokemon?.image,
    attack: currentPokemon?.attack,
    defense: currentPokemon?.defense,
    hp: 1,
    type: "Base",
    idAuthor: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditPokemonData({ ...editPokemonData, [e.target.name]: e.target.value });
  };

  const handleUpdatePokemon = () => {
    editPokemon({ ...currentPokemon, ...editPokemonData });
  };

  const handleCancelButton = () => {
    setEditPokemonData({
      ...editPokemonData,
      name: "",
      image: "",
      attack: 0,
      defense: 0,
    });
  };

  return (
    <section className="container_edit">
      <h2 className="edit_title" data-testid="edit__title">
        Editar Pokemon
      </h2>
      <form>
        <div className="container_form">
          <div>
            <label>
              Nombre:
              <input
                type="text"
                data-testid="edit__name"
                id="name"
                name="name"
                autoComplete="off"
                onChange={handleInputChange}
                value={editPokemonData.name}
                required
              />
            </label>
            <label>
              Imagen:
              <input
                type="text"
                data-testid="edit__image"
                id="image"
                name="image"
                autoComplete="off"
                placeholder="url"
                onChange={handleInputChange}
                value={editPokemonData.image}
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
                data-testid="edit__attack"
                min="0"
                max="100"
                value={editPokemonData.attack}
                onChange={handleInputChange}
                step="1"
              />
              {editPokemonData.attack}
            </label>
            <label>
              Defensa: {0}
              <input
                id="range"
                type="range"
                name="defense"
                data-testid="edit__defense"
                min="0"
                max="100"
                value={editPokemonData.defense}
                onChange={handleInputChange}
                step="1"
              />
              {editPokemonData.defense}
            </label>
          </div>
        </div>
        <div className="buttons_container" data-testid="edit__save__button">
          <button
            style={{
              marginRight: "3px",
            }}
            onClick={handleUpdatePokemon}
          >
            Guardar
          </button>
          <button
            onClick={handleCancelButton}
            data-testid="edit__cancel__button"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};
