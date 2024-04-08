import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: "",
        decodificado: {
            name: "",
            email: "",
            id: ""
        }
    },

    reducers: {
        login: (state, action) => {
            // hemos hecho un login. Tenemos un passport: {
            //                                     token: "ey.rskyukuyufsad"
            //                                     decodificado : {
            //                                          id: 5
            //                                          email: "patata@email.com"
            //                                     }
            return action.payload
        },

        logout: (state, action) => {
            return {
                token: "",
                decodificado: {
                    name: "",
                    email: "",
                    id: ""
                }
            }
        }
    }
})

export const {login, logout} = userSlice.actions

export const getUserData = (state) => state.user
export default userSlice.reducer