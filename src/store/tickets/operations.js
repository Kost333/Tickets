import {ticketsSlice} from "./ticketsSlice";

const openAddModal = () => {
    const {toggleAddModal} = ticketsSlice.actions;

    return (dispatch) => {
        dispatch(toggleAddModal(true))
    }
}

const closeAddModal = () => {
    const {toggleAddModal} = ticketsSlice.actions;

    return (dispatch) => {
        dispatch(toggleAddModal(false))
    }
}
const addEditModal = () => {
    const {toggleEditModal} = ticketsSlice.actions;

    return (dispatch) => {
        dispatch(toggleEditModal(false))
    }
}

const closeEditModal = () => {
    const {toggleEditModal} = ticketsSlice.actions;

    return (dispatch) => {
        dispatch(toggleEditModal(false))
    }
}

export const setupTicketsState = (tickets = []) => {
    const {initState} = ticketsSlice.actions;

    return (dispatch) => {
        dispatch(initState(tickets))
    }
}

export const ticketsOp =  {
    openAddModal,
    closeAddModal,
    addEditModal,
    closeEditModal,
    setupTicketsState,
}
