import * as React from 'react';

interface IHeaderProps {
    
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <>
            <nav className=" w-full  bg-gr-200 shadow border-b flex justify-center relative z-50 ">
                <div className=" w-full lg:w-11/12 flex ">
                    header
                </div>
            </nav>
        </>
    );
};

export default Header;
