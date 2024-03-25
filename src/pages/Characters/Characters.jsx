import { useState } from "react"
import { bringAllCharacters } from "../../services/apiCalls"
import "./Characters.css"

export const Characters = () => {
    const [characters, setCharacters] = useState([])

    const bringCharacters = /*async*/ () => {

        // const apiResponse = await bringAllCharacters()
        // lógica que me convenga usar

        bringAllCharacters()
        .then((apiResponse) => {
            setCharacters(apiResponse.data.results)
            console.log(apiResponse.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (

        <div className="characters-design">
            HOLA, AQUI HABRA PERSONAJES
            <button onClick={bringCharacters}>TRAER PERSONAJES</button>
            <ol>
                {characters.map((char) => {
                    return (
                        <li key={char.id}>{char.name}</li>
                    )
                })}       
            </ol>
        </div>
    )
}