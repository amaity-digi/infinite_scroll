import React, { useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext';

function RootProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    }

    const value = useMemo(
        () => ({
            theme,
            setTheme,
            toggleTheme
        }), [
        theme,
        setTheme,
        toggleTheme
    ]
    )
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export default RootProvider;
