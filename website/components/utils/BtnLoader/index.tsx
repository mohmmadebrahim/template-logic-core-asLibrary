import * as React from 'react';

interface IBtnLoaderProps {
}

export const BtnLoaderDark: React.FunctionComponent<IBtnLoaderProps> = (props) => {
    return (
        <div className=' max-h-[20px]  relative flex justify-center items-center '>
            <div className="BtnLoaderDark"/>
        </div>
    );
};

export const BtnLoaderLight: React.FunctionComponent<IBtnLoaderProps> = (props) => {
    return (
        <div className=' max-h-[20px]  relative flex justify-center items-center '>
            <div className="BtnLoaderLight"/>
        </div>
    );
};

