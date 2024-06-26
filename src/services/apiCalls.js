import axios from "axios";

// const API_URL = "https://rickandmortyapi.com/api"
const API_RM_URL = "https://rickandmortyapi.com/api";
const API_URL = "http://localhost:27017/";
// const API_URL = "https://fsdonline2312tes.vercel.app/"

export const registerNewUserCall = async (credentials) => {
  return await axios.post(`${API_URL}user/`, credentials);
};

export const loginCall = async (credentials) => {
  console.log(credentials, "soy credentials en loginCall")
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
  console.log(res)
  return res.data
}

export const updateProfile = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const res = await axios.put(`${API_URL}user`, data, config)
  console.log(res, "yo soy updateProfile")
  return res
}

export const bringAllCharacters = async () => {
  const res = await axios.get(`${API_RM_URL}/character` /*headers*/);

  return res.data.results;
};

export const bringCharacterById = async (id) => {
  // puedo preparar la información para enviar al servidor
  const res = await axios.get(`${API_RM_URL}/character/${id}`);

  return res.data;
};

export const bringAllUsersCall = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  }

  return axios.get(`${API_URL}user/find?limit=999`, config)

}

export const deleteUserById = async (id, token) => {
  const config = {
    headers: {
      Authorization: `adfshilasdfagf ${token}`
    }
  }
  return axios.delete(`${API_URL}user/${id}`, config)
}

// .get("url", {headers})
// .post("url", {body}, {headers})
// .put("url", {body}, {headers})
// .delete("url", {headers})
