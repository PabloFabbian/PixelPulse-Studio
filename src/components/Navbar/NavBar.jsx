import React, { useState, useEffect, Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Popover, Transition } from '@headlessui/react';
import MoreDropdown from './MoreDropdown';
import './navbar.css';

const NavBar = React.memo(() => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowNav(scrollTop <= lastScrollTop);
            setIsMobileMenuVisible(scrollTop <= lastScrollTop);
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    const toggleDropdown = () => setIsDropdownVisible(prev => !prev);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    return (
        <nav className={`navbar py-5 z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-24 delay-500'}`}>
            <div className='flex justify-between items-center mx-4 md:mx-12'>
                <a href="#Home" className='flex items-center'>
                    <img src="/Logo4.png" className="h-10 mt-1 ml-2" alt="Pixelpulse Logo" />
                    <span className="ml-5 text-white text-[1.6rem] font-base italic">PixelPulse Studio</span>
                </a>

                <div className={`hidden md:flex items-center gap-8 ml-14 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <a href="#Projects" className='text-white text-base block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md'>Portfolio</a>
                    <a href="#About" className='text-white text-base block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md'>About us</a>
                    <a href="#Services" className='text-white text-base block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md'>Services</a>

                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button className="group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white pl-4 pr-3 py-2 hover:bg-slate-700 rounded-md" onClick={toggleDropdown}>
                                    <span className='text-white text-base group-hover:text-cyan-500'>More</span>
                                    <ChevronDownIcon className="h-5 w-5 text-white group-hover:text-cyan-500" />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-[-10%]"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-[-10%]"
                                    show={isDropdownVisible}
                                >
                                    <Popover.Panel className="MoreDropdown-container absolute z-10 mt-5">
                                        <div className="w-screen shadow-lg ring-gray-900/5 text-white">
                                            <MoreDropdown />
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>

                <div className="hidden md:flex items-center gap-4 md:order-2">
                    <button className="mr-3 bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-md transition-transform duration-200 transform hover:scale-105">
                        Learn More
                    </button>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-md flex items-center transition-transform duration-300 transform hover:scale-105">
                        Get Started
                        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                <button onClick={toggleMobileMenu} className="md:hidden flex items-center px-3 py-2 mt-0.5 border rounded text-white border-white hover:text-white hover:border-white">
                    <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <Transition
                show={isMobileMenuOpen && isMobileMenuVisible}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 -translate-y-30"
                enterTo="transform opacity-100 -translate-y-16"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 translate-y-30"
                leaveTo="transform opacity-0 -translate-y-16"
            >
                <div className="md:hidden bg-slate-700 p-5 absolute top-20 left-0 right-0 flex flex-col items-center gap-4 z-40 mt-1">
                    <a href="#Projects" className='text-lg text-white block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md'>Portfolio</a>
                    <a href="#About" className='text-lg text-white block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md'>About us</a>
                    <a href="#Services" className='text-lg text-white block py-3 px-4 hover:bg-slate-700 hover:text-cyan-500 rounded-md'>Services</a>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-md flex items-center transition-transform duration-300 transform hover:scale-105">
                        Get Started
                        <HiOutlineArrowRight className="ml-2 mt-1 h-5 w-5" />
                    </button>
                </div>
            </Transition>
        </nav>
    );
});

export default NavBar;