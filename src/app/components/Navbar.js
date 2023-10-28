'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuToggle=()=>{
        setMobileMenuOpen(!mobileMenuOpen)
    }
    return (
        <nav className='bg-blue-500 p-[20px]'>
            
           
           <div className='container mx-auto flex justify-between items-center relative'>
           <Link href='/' className='text-white text-2xl font-bold'>
           Tanvir
           
           </Link>
           {/* -----------------destop version---------------- */}
           <div className='hidden md:flex space-x-4'>
           <Link href='/' className='font-semibold text-white'>Home</Link>
            <Link href='/products' className='font-semibold text-white'>Products</Link>
            <Link href='/about' className='font-semibold text-white'>About</Link>
            <Link href='/login' className='font-semibold text-white'>Login</Link>
           </div>
           {/* ------------------------mobile version----------------------- */}
           <div className='md:hidden'>
            <button onClick={()=>mobileMenuToggle()}>
                {
                    mobileMenuOpen ? <AiOutlineClose size={24}/>:<AiOutlineMenu size={24}/>
                }

            </button>
           </div>
           
            
           </div>
          
            {
                mobileMenuOpen && (
                    <div className='md:hidden flex flex-col mt-5 absolute right-0 bg-blue-500 p-6 h-[200px] space-y-2'>
                       
                        <Link href='/' className='font-semibold text-white'>Home</Link>
            <Link href='/products' className='font-semibold text-white'>Products</Link>
            <Link href='/about' className='font-semibold text-white'>About</Link>
            <Link href='/login' className='font-semibold text-white'>Login</Link>
                      
                        
                    </div>

                )
            }
           
        </nav>
    );
};

export default Navbar;