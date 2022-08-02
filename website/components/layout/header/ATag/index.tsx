import Link from 'next/link';
import React from 'react';

interface IATagProps {
    name: string,
    href?: string
}

const ATag: React.FunctionComponent<IATagProps> = ({ name, href }) => {
    return (
        <Link href={href}>
            <a className=' hidden lg:flex justify-center mx-6 Quicksand-Bold hover:text-landing-bar cursor-pointer transition-all duration-300 relative py-6 group'>
                {name}
                <div className=' bg-landing-bar w-[10px] h-[10px] rounded-full absolute top-[-1rem] mx-auto right-0 left-0 group-hover:top-2 transition-all duration-300' />
            </a>
        </Link>
    );
};

export default ATag;
