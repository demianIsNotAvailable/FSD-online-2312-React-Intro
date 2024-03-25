import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api"
// const API_URL = "hhtp://localhost:4000"
// const API_URL = "aquí hay una url para un entorno de desarrollo"

export const registerNewUserCall = async () => {

}

export const loginCall = async () => {

}

// export const bringAllCharacters = async () => {
//     const res = await axios.get("https://rickandmortyapi.com/api/character", /*headers*/)

//     return res
// }

export const bringAllCharacters = async () => {
    const res = await axios.get(`${API_URL}/character`, /*headers*/)

    return res
}
