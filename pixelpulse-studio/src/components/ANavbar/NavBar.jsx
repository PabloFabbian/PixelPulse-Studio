import React from 'react';
import { Fragment } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Popover, Transition } from '@headlessui/react';
import MoreDropdown from '../BMoreDropdown/MoreDropdown';
import './NavBar.css';

const NavBar = React.memo(() => {
    return (
        <Navbar fluid>
            <div className='leftNav-container'>
                <Navbar.Brand href="#" className='ml-10'>
                    <img src="/Logo.ico" className="h-6 sm:h-12" alt="Pixelpulse Logo" />
                </Navbar.Brand>

                <Navbar.Collapse className='ml-14'>
                    <div className='flex gap-8 items-center'>
                        <Navbar.Link href="#">About us</Navbar.Link>
                        <Navbar.Link href="#">Services</Navbar.Link>
                        <Navbar.Link href="#">Portfolio</Navbar.Link>
                        <Popover className="relative">
                            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                <span>More</span>
                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-1"
                                leaveTo="opacity-0 translate-y-0"
                            >
                                <Popover.Panel className="MoreDropdown-container absolute z-10 mt-5">
                                    <div className="w-screen bg-white shadow-lg ring-gray-900/5">
                                        <MoreDropdown />
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                </Navbar.Collapse>
            </div>

            <div className="flex mr-10 md:order-2">
                <Button className="mr-2 bg-blue-600" color="blue">Learn More</Button>
                <Button outline gradientDuoTone="purpleToBlue">
                    Get Started
                    <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
});

export default NavBar;