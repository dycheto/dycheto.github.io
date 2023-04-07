import { createContext, useState } from "react";
import * as themeServices from '../services/themeService'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const currentTheme = themeServices.getTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        themeServices.setTheme(currentTheme === 'light' ? 'dark' : 'light');
        setIsDarkMode(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme, isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}