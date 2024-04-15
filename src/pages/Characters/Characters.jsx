import { useEffect, useState } from "react";
import {
  bringAllCharacters,
  bringCharacterById,
} from "../../services/apiCalls";
import "./Characters.css";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { CustomInput } from "../../components/CustomInput/CustomInput";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const bringCharacters = /*async*/ () => {
    // const apiResponse = await bringAllCharacters()
    // lógica que me convenga usar

    bringAllCharacters()
      .then((res) => {
        setCharacters(res);
      })
      .catch((error) => {
        console.log(error, "ups");
      });
  };

  const characterCardClickHandler = (char) => {
    bringCharacterById(char.id).then((res) => {
      console.log(res);
    });
  };

  // handler del buscador de personajes
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  // useEffect que hará el filtrado de personajes
  useEffect(() => {
    // debouncing (esperar a dejar de teclear para lanzar la petición)
    const lowercaseFilter = filter.toLowerCase();

    if (filter !== "") {
        // preparamos un setTimeout que se ejecutará al cabo de un segundo con una llamada a la API (en este caso filtrado en front del array)
      const filterTimer = setTimeout(() => {
        // filtramos el array de personajes
        const foundCharacters = characters.filter((char) => {
          return char.name.toLowerCase().includes(lowercaseFilter);
        });
        if (foundCharacters.length > 0) {
          setFilteredCharacters(foundCharacters);
        } else {
          setFilteredCharacters([]);
          // si al menos un personaje cumple el filtro, lo seteamos, else lo vaciamos
        }
    }, 1000);
    
    // preparamos el botón que cancelará el setTimeout preparado anteriormente cuando se desmonte el componente actual (Characters)
    // O SE DISPARE DE NUEVO EL USE EFFECT, de manera que creamos un bucle crear temporizador -> preparar cancelación -> cancelar + crear temporizador
    return () => clearTimeout(filterTimer);
    }
    else {
        console.log("el filtro está vacío")
        setFilteredCharacters([])
    }
  }, [filter]);

  return (
    <div className="characters-design">
      HOLA, AQUI HABRA PERSONAJES
      <button onClick={bringCharacters}>TRAER PERSONAJES</button>
      <CustomInput // input del buscador
        typeProp="text"
        nameProp="filter"
        handlerProp={filterHandler}
      />
      <ol>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((char) => {
            return (
              <CharacterCard
                key={char.id}
                character={char}
                handleClick={() => characterCardClickHandler(char)}
              />
            );
          })
        ) : (
          characters.map((char) => {
            return (
              <CharacterCard
                key={char.id}
                character={char}
                handleClick={() => characterCardClickHandler(char)}
              />
            );
          })
        )}
      </ol>
    </div>
  );
};
