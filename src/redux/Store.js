import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './UserSlice'
import ThemeReducer from './ThemeSlice'

const store = configureStore({
    reducer: {
        user: UserReducer,
        theme: ThemeReducer
    }
})

export default store