import {createContext, useState, useContext} from 'react';

const themeConfig = {
    light: {
        color: 'purple',
        background: 'yellow'
    },
    dark: {
        color: 'yellow',
        background: 'purple'
    }
}

const ThemeContext = createContext(themeConfig.light);

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(themeConfig.light);

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === themeConfig.light ? themeConfig.dark : themeConfig.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContextProvider;