import { createSlice } from '@reduxjs/toolkit'

//gestion de l'utilisateur
const UserSlice = createSlice ({
    name: 'user',
    initialState: {
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
        id: '',
    },
    reducers: { //fonctions modifications état
        setUser: (state, action) => { //maj de l'ensemble de l'état de l'utilisateur
            return { ...state, ...action.payload };
        },
        clearUser: (state) => { //Réinitialise toutes les propriétés de l'utilisateur à des valeurs vides
            state.email = '';
            state.firstName = '';
            state.lastName = '';
            state.userName = '';
            state.id = '';
        },
        updateUser: (state, action) => { //maj uniquement du username avec valeur fournie pdt l'action
            return { ...state, userName: action.payload };
        }
    }
})

export const { setUser, clearUser, updateUser } = UserSlice.actions
export default UserSlice.reducer;