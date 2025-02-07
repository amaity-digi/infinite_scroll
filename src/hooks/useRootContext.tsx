import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function useRootContext() {
    const { theme, setTheme, toggleTheme } = useContext(ThemeContext);
    return {
        theme,
        setTheme,
        toggleTheme
    }
}

export default useRootContext;
