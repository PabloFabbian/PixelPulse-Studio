import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-[#362F78] via-[#161F31] to-[#161F31] text-white py-10 px-6">
            {/* Overlay inside the footer */}
            <div className="absolute inset-0 bg-[#1F2937] opacity-20 pointer-events-none z-10" />

            {/* Upper section with logo, description, and social icons */}
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mb-8 relative z-20">
                {/* Logo and description */}
                <div className="mb-6 sm:mb-0">
                    <a href="#" className="flex items-center text-2xl font-semibold mb-4">
                        <img src="/Logo4.png" alt="PixelPulse Studio Logo" className="h-10 mt-0.5 mr-3" />
                        PixelPulse Studio
                    </a>
                    <p>
                        Taking creativity to the next level. Choosing graphic design, branding, and tailored digital solutions.
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="text-white transition hover:text-blue-500">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="text-white transition hover:text-pink-400">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-white transition hover:text-blue-700">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="#" className="text-white transition hover:text-blue-400">
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>

            {/* Navigation links, newsletter subscription, and copyright section */}
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-8 relative z-20">
                {/* Links */}
                <div className="flex flex-row justify-center sm:justify-start gap-4 mb-8 sm:mb-0">
                    <a href="#" className="hover:text-slate-300">About</a>
                    <a href="#" className="hover:text-slate-300">Services</a>
                    <a href="#" className="hover:text-slate-300">Portfolio</a>
                    <a href="#" className="hover:text-slate-300">Blog</a>
                    <a href="#" className="hover:text-slate-300">Contact</a>
                </div>

                {/* Newsletter subscription */}
                <div className="text-center sm:text-left mb-8 sm:mb-0">
                    <h4 className="text-lg font-semibold mb-3">Subscribe to our Newsletter</h4>
                    <form className="flex flex-col sm:flex-row items-center sm:items-stretch space-y-3 sm:space-y-0 sm:space-x-3">
                        <input
                            type="email"
                            className="px-4 py-2 text-black rounded-md focus:outline-none bg-slate-300"
                            placeholder="Your email"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-t from-[#050347] to-[#081E87] hover:bg-gradient-to-t hover:from-[#0B0C2A] hover:to-[#060F64] text-white px-6 py-2 rounded-sm transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container mx-auto text-center mt-8 text-sm text-gray-400 relative z-20">
                <p>&copy; 2024 PixelPulse Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;