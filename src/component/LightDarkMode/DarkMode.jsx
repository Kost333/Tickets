import React, {useEffect} from "react";
import "./DarkMode.css";
import {ChangeEventHandler} from "react";
import {useDispatch} from "react-redux";
import {appStylesOp} from "../../store/app/operations";

const DarkMode = () => {
    const dispatch = useDispatch();

    const setDark = () => {
        // dispatch(appStylesOp.setStyles({ theme: 'dark'}))
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        // dispatch(appStylesOp.setStyles({ theme: 'light'}))
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };

    useEffect(() => {
        console.log(1112)
    }, [setDark])

    // useEffect(() => {}, [setDark])
    //
    // useEffect(() => {
    //     dispatch(appStylesOp.setStyles({ theme: 'dark'}))
    // }, [])

    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
        storedTheme === "dark" || (storedTheme === null && prefersDark);

    if (defaultDark) {
        setDark();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDark();
        } else {
            setLight();
        }
    };


    return (
        <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"

                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                />
                <div className="slider round"></div>
            </label>
            <span>🌒</span>
        </div>
    );
};

export default DarkMode;