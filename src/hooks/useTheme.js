import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
    const themeState = useContext(ThemeContext);
    return themeState;
}