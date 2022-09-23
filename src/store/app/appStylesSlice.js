import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    state: [],
    styles: {
        theme: 'dark'
    }
};

export const appStylesSlice = createSlice({
    name: 'appStyles',
    initialState,
    reducers: {
        setAppStyles: (state, action) => {
            state.styles = action.payload
        },
        initState: (state, action) => {
            state.state = action.payload
        },
    },
})

export default appStylesSlice.reducer