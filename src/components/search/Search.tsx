import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./search.css";
import { Table } from "../table/Table";

export const Search = (): React.ReactElement => {
  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      await axios
        .get("https://bp-pokemons.herokuapp.com/?idAuthor=1")
        .then((resp) => {
          setData(resp.data);
          setOriginalData(resp.data);
        });
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = () => {
    const filteredData = data.filter((value: any) => {
      return (
        value.name.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.attack
          .toString()
          .toLowerCase()
          .includes(searchVal.toLowerCase()) ||
        value.defense.toString().toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setData(filteredData);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    filteredPokemons();
  };

  const handleClearBtn = () => {
    setData(originalData);
    setSearchVal("");
  };

  return (
    <div>
      <div className="container">
        <h1 data-testid="main__title" className="main_title">
          Listado de Pokemon
        </h1>
        <div className="input-wrap">
          <input
            onChange={handleSearchInput}
            data-testid="search__bar"
            value={searchVal || ""}
            type="text"
            name="pokemon-search"
            id="pokemon-search"
            placeholder="Buscar"
          />
          <i onClick={handleClearBtn}>
            <IoMdClose />
          </i>
        </div>
      </div>

      <div>
        <Table
          data={data}
          setData={setData}
          setOriginalData={setOriginalData}
        />
      </div>
    </div>
  );
};
