import * as React from 'react';

interface IBtnLoaderProps {
}

export const BtnLoaderDark: React.FunctionComponent<IBtnLoaderProps> = (props) => {
    return (
        <div className="BtnLoaderDark"></div>
    );
};

export const BtnLoaderLight: React.FunctionComponent<IBtnLoaderProps> = (props) => {
    return (
        <div className="BtnLoaderLight"></div>
    );
};

