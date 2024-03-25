import { useState } from "react"
import { bringAllCharacters, bringCharacterById } from "../../services/apiCalls"
import "./Characters.css"
import { CharacterCard } from "../../components/CharacterCard/CharacterCard"

export const Characters = () => {
    const [characters, setCharacters] = useState([])
    const bringCharacters = /*async*/ () => {

        // const apiResponse = await bringAllCharacters()
        // lógica que me convenga usar

        bringAllCharacters()
        .then((res) => {
            setCharacters(res)
            console.log(res)
        })
        .catch((error) => {
            console.log(error, "ups")
        })
    }

    const characterCardClickHandler = (char) => {
        bringCharacterById(char.id)
        .then((res) => {
            console.log(res)
        })
    }

    return (

        <div className="characters-design">
            HOLA, AQUI HABRA PERSONAJES
            <button onClick={bringCharacters}>TRAER PERSONAJES</button>
            <ol>
                {characters.map((char) => {
                    return (
                        <CharacterCard key={char.id} 
                        character={char}
                        handleClick={() => characterCardClickHandler(char)}
                        />
                    )
                })}       
            </ol>
        </div>
    )
}