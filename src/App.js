import React from 'react';
import Ticket from "./component/tickets/ticket";
import {Provider} from "react-redux";
import {store} from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <Ticket/>
        </Provider>
    );
};

export default App;