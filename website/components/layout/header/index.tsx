import { ThemeMode } from 'core';
import Link from 'next/link';
import React, { useState } from 'react';
import ATag from './ATag';
import { fakeATagData } from './ATag/fakeData';

interface IHeaderProps {

}

const Header: React.FunctionComponent<IHeaderProps> = ({ }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    function changeThemeMode() {
        darkMode ? ThemeMode({ mode: 'dark' }) : ThemeMode({ mode: 'light' })
        setDarkMode(!darkMode)
    }

    return (
        <>
            <nav className=" w-full flex justify-center items-center relative px-4 max-w-screen-xl mx-auto">
                <Link href={"/"}>
                    <a>
                        <img className=' w-full py-4' src='/assets/svg/collection/sale-shop.svg' />
                    </a>
                </Link>
                <div className=' w-full flex justify-center items-center'>
                    {fakeATagData.map((items, index) => <ATag key={index} name={items.name} href={items.href} />)}
                    <img onClick={() => changeThemeMode()} className={` cursor-pointer ${darkMode ? "visible opacity-100 h-[25px] w-[26px] ml-4" : " invisible opacity-0 h-0 w-0"} transition-all duration-300`} src='/assets/svg/theme-mode/solar.svg' />
                    <img onClick={() => changeThemeMode()} className={` cursor-pointer ${!darkMode ? "visible opacity-100 h-[25px] w-[26px] ml-4" : " invisible opacity-0 h-0 w-0"} transition-all duration-300`} src='/assets/svg/theme-mode/moon-nigh.svg' />
                </div>
                <div className=' w-fit flex justify-center items-center'>
                    <button className=' border-none mx-4 Quicksand-Bold'>
                        Login
                    </button>
                    <button className=' border-none rounded-main mx-4 Quicksand-Bold bg-landing-text-dark px-10 text-landing-text-light py-2 '>
                        SignUp
                    </button>

                </div>

            </nav>
        </>
    );
};

export default Header;
