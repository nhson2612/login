import { createSlice } from '@reduxjs/toolkit'
import {user} from '../assets/data'

const initialState = {
    user: user
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const selectUser = (state) => state.user.user

export const { login, logout } = userSlice.actions
const UserReducer = userSlice.reducer
export default UserReducer