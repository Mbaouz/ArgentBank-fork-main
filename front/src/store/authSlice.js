import { createSlice } from '@reduxjs/toolkit'

//gestion authentification de l'app
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null //état initial du slice
    },
    reducers: {
        login: (state, action) => { //login prend 2 paramètres
            state.token = action.payload //maj de l'état en définissant la propriété token sur la valeur fournie dans action.payload
        },
        logout: (state) => {
            state.token = null //reinitialise à null 
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer