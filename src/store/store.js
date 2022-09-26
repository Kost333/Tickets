import {configureStore} from '@reduxjs/toolkit'
import {ticketsSlice} from "./tickets/ticketsSlice";
import {appStylesSlice} from "./app/appStylesSlice";

export const store = configureStore({
    reducer: {
        tickets: ticketsSlice.reducer,
        appStyles: appStylesSlice.reducer
    },
});
