"use client"
import { hr, label } from 'framer-motion/client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
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
    <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50'>
        <div className='container max-w-7xl mx-auto px-4'>
            {/* Logo and desktop menu */}
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
                </div>
            </div>
            {/* mobile */}
        </div>
    </nav>
  )
}

export default Navbar