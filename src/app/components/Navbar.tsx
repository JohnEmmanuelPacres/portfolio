"use client"
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { hr, label } from 'framer-motion/client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const {theme, toggleTheme} = useTheme();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const pathName = usePathname();
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/projects", label: "Projects"},
        {href: "/blogs", label: "Blogs"},
        {href: "/contact", label: "Contacts"}
    ]


  return (
    <nav className='fixed w-full bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700'>
        <div className='container max-w-7xl mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                <Link href="/" className='text-xl font-bold text-primary'>Pacres&trade;</Link>
                {/* desktop */}
                <div className='hidden md:flex items-center space-x-8'>
                    {
                        menuItems.map((item) => {
                            const isActive = pathName === item.href;
                            return (
                                <Link key = {item.href} href={item.href} className={`hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                                    {item.label}
                                </Link>
                            )
                        }) 
                    }
                    <button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary 
                    transition-colors cursor-pointer'>
                        {
                            theme === "dark" ? (
                                <SunIcon className='w-5 h-5'/>
                            ) : (
                                <MoonIcon className='w-5 h-5'/>
                            )
                        }
                    </button>
                </div>

                {/* mobile */}
                <button 
                onClick={toggleMobileMenu}
                className='md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300
                transition-colors cursor-pointer'>
                    {
                        isMobileMenuOpen ? (<XMarkIcon className='w-6 h-6'/>) : (<Bars3Icon className='w-6 h-6'/>)
                    }
                </button>
            </div>

            {/* mobile menu */}
            {
                isMobileMenuOpen && (
                    <div className='md:hidden'>
                        <div className = 'py-4 space-y-4'>
                            {
                                menuItems.map((item, index) => (
                                    <div key={index} onClick={toggleMobileMenu}>
                                        <Link href = {item.href} className='block py-2 hover:text-primary
                                        transition-colors'>{item.label}</Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <button onClick = {toggleTheme} className='flex items-center py-2 hover:text-primary transition-colors text-gray-700 dark:text-gray-300'>
                                {
                                    theme === "dark" ? (
                                        <><SunIcon className='w-5 h-5 mr-2'/>Light Mode</>
                                    ) : (
                                        <><MoonIcon className='w-5 h-5 mr-2'/>Dark Mode</>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar