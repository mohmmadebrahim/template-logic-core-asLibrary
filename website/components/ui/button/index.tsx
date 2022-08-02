import React from 'react';
import { BtnLoaderDark, BtnLoaderLight } from '../../utils';

interface ICButtonProps {
    isLoading: boolean,
    loaderType: "dark" | "light",
    className?: string,
    text: string
}

const CButton: React.FunctionComponent<ICButtonProps> = ({className, isLoading, loaderType, text }) => {
    return (
        <button className={` ${className} bg-landing-bar text-landing-text-dark rounded-main hover:bg-landing-bar transition-all py-2 duration-300 flex justify-center items-center ${isLoading ? "px-10" : "px-8"}`}>
           {text} {isLoading && <span className=' ml-3'>{loaderType === "dark" ? <BtnLoaderDark/> : <BtnLoaderLight/> }</span>}
        </button>
    );
};

export default CButton;
