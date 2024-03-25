import { bringAllCharacters } from "../../services/apiCalls"
import "./Characters.css"

export const Characters = () => {

    const bringCharacters = /*async*/ () => {

        // const apiResponse = await bringAllCharacters()
        // lógica que me convenga usar

        bringAllCharacters()
        .then((apiResponse) => {
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
        </div>
    )
}