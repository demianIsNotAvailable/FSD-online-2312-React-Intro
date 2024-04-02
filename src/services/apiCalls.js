import axios from "axios";

// const API_URL = "https://rickandmortyapi.com/api"
const API_RM_URL = "https://rickandmortyapi.com/api";
const API_URL = "http://localhost:27017/";
// const API_URL = "aquí hay una url para un entorno de desarrollo"

export const registerNewUserCall = async (credentials) => {
  return await axios.post(`${API_URL}user/`, credentials);
};

export const loginCall = async (credentials) => {
  console.log(credentials)
  const res = await axios.post(`${API_URL}user/login`, credentials);
  console.log(res)
  return res
};

export const bringProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await axios.get(`${API_URL}user`, config)
  console.log(res, "bringProfile")
  return res
}


// export const bringAllCharacters = async () => {
//     const res = await axios.get("https://rickandmortyapi.com/api/character", /*headers*/)

//     return res
// }

export const bringAllCharacters = async () => {
  const res = await axios.get(`${API_RM_URL}/character` /*headers*/);

  return res.data.results;
};

export const bringCharacterById = async (id) => {
  // puedo preparar la información para enviar al servidor
  const res = await axios.get(`${API_RM_URL}/character/${id}`);

  return res.data;
};

// .get("url", {headers})
// .post("url", {body}, {headers})
// .put("url", {body}, {headers})
// .delete("url", {headers})
