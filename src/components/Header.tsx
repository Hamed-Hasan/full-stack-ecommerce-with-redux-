import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
            
            <div className='hidden md:flex w-full items-center justify-between'>
                <Link to={"/"} className="flex items-center gap-2">
                <img src="" className="w-8 object-cover" alt="logo" />
                </Link>

            </div>

        </header>
    );
};

export default Header;