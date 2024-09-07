import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-10 px-6">
        {/* Upper section with logo, description, and social icons */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-8">
                {/* Logo and description */}
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center text-2xl font-semibold mb-4">
                        <img src="/Logo.png" alt="PixelPulse Studio Logo" className="h-10 mr-3" />
                        PixelPulse Studio
                    </a>
                    <p>
                        Taking creativity to the next level. Specializing in graphic design, branding, and tailored digital solutions.
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-500">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-pink-400">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-700">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400">
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>

            {/* Navigation links, newsletter subscription, and copyright section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
                {/* Links */}
                <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mb-8 md:mb-0">
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Services</a>
                    <a href="#" className="hover:text-gray-400">Portfolio</a>
                    <a href="#" className="hover:text-gray-400">Blog</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </div>

                {/* Newsletter subscription */}
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <h4 className="text-lg font-semibold mb-3">Subscribe to our Newsletter</h4>
                    <form className="flex flex-col md:flex-row items-center md:items-stretch space-y-3 md:space-y-0 md:space-x-3">
                        <input
                        type="email"
                        className="px-4 py-2 text-black rounded-md focus:outline-none"
                        placeholder="Your email"
                        />
                        <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                        >
                        Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container mx-auto text-center mt-8 text-sm text-gray-400">
                <p>&copy; 2024 PixelPulse Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;