import {appStylesSlice} from "./appStylesSlice";

const setStyles = (styles) => {
    const {setAppStyles} = appStylesSlice.actions;

    return (dispatch) => {
        dispatch(setAppStyles(styles))
    }
}

export const appStylesOp = {
    setStyles
}
