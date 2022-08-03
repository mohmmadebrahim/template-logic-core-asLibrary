import { ThemeMode } from 'core';
import localforage from 'localforage';
import * as React from 'react';

interface IThemeModeButtonProps {
}

const ThemeModeButton: React.FunctionComponent<IThemeModeButtonProps> = ({ }) => {
    const [darkMode, setDarkMode] = React.useState<boolean>(false)

    function changeThemeMode(themeMode?: "light" | "dark") {
        if(themeMode) return ThemeMode({ mode: themeMode })
        darkMode ? ThemeMode({ mode: 'dark' }) : ThemeMode({ mode: 'light' })
        setDarkMode(!darkMode)
    }

    async function getThemeLocal() {
        const currentTheme = await localforage.getItem("theme-mode")
        console.log(currentTheme);
        
        if(currentTheme && currentTheme === "light"){
            setDarkMode(true)
            changeThemeMode("light")
        }else if(currentTheme && currentTheme === "dark"){
            setDarkMode(false)
            changeThemeMode("dark")
        }
    }

    React.useEffect(()=>{
        getThemeLocal()
    },[])

    return (
        <>
            <img onClick={() => changeThemeMode()} className={` cursor-pointer ${darkMode ? "visible opacity-100 h-[25px] w-[26px] ml-4" : " invisible opacity-0 h-0 w-0"} transition-all duration-300`} 
            src='/assets/svg/theme-mode/moon-nigh.svg' />
            <img onClick={() => changeThemeMode()} className={` cursor-pointer ${!darkMode ? "visible opacity-100 h-[25px] w-[26px] ml-4" : " invisible opacity-0 h-0 w-0"} transition-all duration-300`} 
            src='/assets/svg/theme-mode/solar.svg' />
        </>
    );
};

export default ThemeModeButton;
