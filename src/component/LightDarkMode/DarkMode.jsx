import React, {useEffect, useState} from "react";
import "./DarkMode.css";
import {useDispatch} from "react-redux";
import {appStylesOp} from "../../store/app/operations";

const DarkMode = () => {
    const dispatch = useDispatch();
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultDark =
        storedTheme === "dark" || (storedTheme === null && prefersDark);

    const [isDarkEnabled, setIsDarkEnabled] = useState(prefersDark)

    const setDark = () => {
        dispatch(appStylesOp.setStyles({theme: 'dark'}))
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        setIsDarkEnabled(true)
    };

    const setLight = () => {
        dispatch(appStylesOp.setStyles({theme: 'light'}))
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        setIsDarkEnabled(false)
    };

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDark();
        } else {
            setLight();
        }
    };

    useEffect(() => {
        if (defaultDark) {
            setDark();
        } else {
            setLight();
        }
    }, [])

    return (
        <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={isDarkEnabled}
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