import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    state: [],
    modals: {
        addModal: {
            open: false
        },
        editModal: {
            open: false
        },
    }
};

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        toggleAddModal: (state, action) => {
            state.modals.open = action.payload
        },
        toggleEditModal: (state, action) => {
            state.modals.open = action.payload
        },
        initState: (state, action) => {
            state.state = action.payload
        },
    },
})

export default ticketsSlice.reducer