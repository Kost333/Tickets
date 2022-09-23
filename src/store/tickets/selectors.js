const addModalSelector = (state) => state.tickets.modals.addModal
const editModalSelector = (state) => state.tickets.modals.editModal
const ticketsDataSelector = (state) => state.tickets.state

export const ticketsSel =  {
    addModalSelector,
    editModalSelector,
    ticketsDataSelector
};
