import "./table.css";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import deletePokemonTable from "../../services/delete-pokemon-table";
import EditPokemonTable from "../../services/edit-pokemon-table";
import { CreatePokemon } from "../forms/CreatePokemon";
import { EditPokemon } from "../forms/EditPokemon";
import { useState } from "react";

export const Table = ({ data, setData }: any): React.ReactElement => {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const deletePokemon = async (pokemon: any) => {
    await deletePokemonTable.deletePokemonTable(pokemon.id);
    const newPokemons = data.filter((item: any) => pokemon.id !== item.id);
    setData(newPokemons);
    alert("Pokemon eliminado exitosamente.");
  };

  const editPokemon = async (pokemon: any) => {
    await EditPokemonTable.editPokemonTable(pokemon.id, pokemon);
    const newPokemons = data.map((item: any) =>
      pokemon.id === item.id ? pokemon : item
    );
    setData(newPokemons);
  };

  const addPokemonTable = (pokemon: any) => {
    setData([pokemon, ...data]);
  };

  const handleEdit = (item: any) => {
    setCurrentPokemon(item);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          onClick={() => setCurrentPokemon(null)}
          data-testid="new__pokemon__button"
        >
          + Nuevo
        </button>
      </div>
      <table data-testid="pokemons__table">
        <tbody>
          <tr data-testid="table__header">
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Acciones</th>
          </tr>
          {data?.map((item: any) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <img
                  src={item.image}
                  alt="img"
                  style={{ width: "40px", height: "40px", padding: "0px" }}
                />
              </td>
              <td>{item.attack}</td>
              <td>{item.defense}</td>
              <td>
                <div>
                  <MdDelete
                    data-testid="delete__button"
                    type="button"
                    onClick={() => {
                      deletePokemon(item);
                    }}
                    style={{ color: "#7E57C2 " }}
                    size={50}
                  />
                  <AiOutlineEdit
                    size={50}
                    style={{ color: "#7E57C2 " }}
                    onClick={() => handleEdit(item)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentPokemon ? (
        <EditPokemon
          editPokemon={editPokemon}
          currentPokemon={currentPokemon}
        />
      ) : (
        <CreatePokemon addPokemonTable={addPokemonTable} />
      )}
    </>
  );
};
