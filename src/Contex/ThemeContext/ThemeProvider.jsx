import React, { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider