import React from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'
const Header = () => {
    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
          <div className='hidden md:flex w-full h-full items-center justify-between'>
          {/* <Link to={'/'} className=''></Link> */}

        <a href="#" className="flex items-center gap-2">
          <img src={Logo} className='w-8 object-cover' alt="logo" />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </a>

        
          </div>

        </header>
    );
};

export default Header;