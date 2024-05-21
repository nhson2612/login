import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light"
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const selectTheme = (state) => state.theme.theme
export const { setTheme } = ThemeSlice.actions
const ThemeReducer = ThemeSlice.reducer
export default ThemeReducer