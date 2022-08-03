import { ThemeMode } from 'core';
import Link from 'next/link';
import React, { useState } from 'react';
import ATag from './ATag';
import { fakeATagData } from './ATag/fakeData';
import ThemeModeButton from './themeMode';

interface IHeaderProps {

}

const Header: React.FunctionComponent<IHeaderProps> = ({ }) => {


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
                    <ThemeModeButton />
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
