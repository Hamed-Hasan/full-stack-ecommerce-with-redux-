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
<div className='flex items-center gap-24'>
<motion.ul 
initial={{ opacity: 0, x: 200 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 200}}
className='flex items-center gap-24'
>
<li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
<li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
<li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
<li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
</motion.ul>
</div>

          </div>

        </header>
    );
};

export default Header;