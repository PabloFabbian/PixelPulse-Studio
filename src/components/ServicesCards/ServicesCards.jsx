import React from 'react';
import { motion } from 'framer-motion';
import './servicesCards.css';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <motion.div
            className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center min-w-[250px] max-w-xs"
            initial={{ opacity: 0, x: 750 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex items-center justify-center h-16 w-16 bg-gray-600 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>
            <p className="text-gray-300 text-center">{description}</p>
        </motion.div>
    );
};

const GraphicDesignServices = () => {
    return (
        <div className="bg-gradient-to-tr from-indigo-900 via-[#161F31] to-[#111827]" id="Services">
            <div className="container mx-auto py-16 px-6">
                <div className="flex flex-col sm:flex-row lg:flex-row lg:space-x-16">
                    <div className="md:w-full sm:w-1/2 mb-6 mr-6 lg:mb-0 flex flex-col justify-center">
                        <p className="text-sm font-semibold text-gray-400">Creative</p>
                        <h2 className="text-4xl font-bold mt-2 mb-4 text-white mr-6">
                            Transforming Ideas into 
                            <span className="block">Stunning Designs</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Our graphic design studio offers a range of key services to help businesses establish a strong brand presence. From branding and digital design to print materials, we have the expertise to bring your vision to life. With a focus on creativity and attention to detail, we deliver stunning designs that captivate and engage your target audience.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/2 flex items-center justify-center">
                        <div className="overflow-x-auto py-4 flex space-x-6 scrollbar-custom">
                            <div className="flex flex-nowrap space-x-6">
                                <ServiceCard
                                    icon={<svg className="h-10 w-auto ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.74 17.7499H17.66C17.57 17.8299 17.48 17.8999 17.39 17.9799L13.12 21.1799C11.71 22.2299 9.41001 22.2299 7.99001 21.1799L3.71001 17.9799C2.77001 17.2799 2 15.7299 2 14.5599V7.14986C2 5.92986 2.93001 4.57986 4.07001 4.14986L9.05 2.27986C9.87 1.96986 11.23 1.96986 12.05 2.27986L17.02 4.14986C17.97 4.50986 18.78 5.50986 19.03 6.52986H11.73C11.51 6.52986 11.31 6.53987 11.12 6.53987C9.27 6.64987 8.78999 7.31986 8.78999 9.42986V14.8598C8.79999 17.1598 9.39001 17.7499 11.74 17.7499Z" stroke="#198898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8.80005 11.22H22" stroke="#198898" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M22 9.41977V14.9698C21.98 17.1898 21.37 17.7397 19.06 17.7397H11.7401C9.39005 17.7397 8.80005 17.1498 8.80005 14.8398V9.40976C8.80005 7.30976 9.28005 6.63974 11.1301 6.51974C11.3201 6.51974 11.5201 6.50977 11.7401 6.50977H19.06C21.41 6.51977 22 7.09977 22 9.41977Z" stroke="#198898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11.3201 15.2598H12.6501" stroke="#198898" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14.75 15.2598H18.02" stroke="#198898" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
                                    title="Branding Solutions"
                                    description="Branding solutions that create a strong and memorable identity for your business."
                                />
                                <ServiceCard
                                    icon={<svg className="h-10 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#198898"></path><path d="M12 16.75C9.38 16.75 7.25 14.62 7.25 12C7.25 9.38 9.38 7.25 12 7.25C14.62 7.25 16.75 9.38 16.75 12C16.75 14.62 14.62 16.75 12 16.75ZM12 8.75C10.21 8.75 8.75 10.21 8.75 12C8.75 13.79 10.21 15.25 12 15.25C13.79 15.25 15.25 13.79 15.25 12C15.25 10.21 13.79 8.75 12 8.75Z" fill="#198898"></path><path d="M21.17 8.75C21.12 8.75 21.06 8.74 21.01 8.73C18.07 8.09 15.1 8.09 12.16 8.73C11.75 8.82 11.36 8.56 11.27 8.16C11.18 7.75 11.44 7.36 11.84 7.27C14.99 6.58 18.18 6.58 21.33 7.27C21.73 7.36 21.99 7.76 21.9 8.16C21.83 8.51 21.52 8.75 21.17 8.75Z" fill="#198898"></path><path d="M8.54001 14.75C8.33001 14.75 8.12001 14.66 7.97001 14.49C5.89001 12.1 4.31001 9.37001 3.26001 6.37001L3.95001 6.06001L4.66001 5.82001L4.68001 5.88001C5.66001 8.69001 7.15001 11.26 9.11001 13.51C9.38001 13.82 9.35001 14.3 9.04001 14.57C8.89001 14.69 8.71001 14.75 8.54001 14.75Z" fill="#198898"></path><path d="M10.8801 22.69C10.7001 22.69 10.5201 22.63 10.3801 22.5C10.0701 22.22 10.0501 21.75 10.3301 21.44C12.3301 19.24 13.8101 16.69 14.7301 13.86C14.8601 13.47 15.3001 13.21 15.6901 13.34C16.0801 13.47 16.3101 13.85 16.1901 14.24C15.1801 17.36 13.5901 20.1 11.4501 22.46C11.2901 22.61 11.0801 22.69 10.8801 22.69Z" fill="#198898"></path></g></svg>}
                                    title="Web Design"
                                    description="Crafting user-friendly and visually appealing websites tailored to your business needs."
                                />
                                <ServiceCard
                                    icon={<svg className="h-10 w-auto" fill="#198898" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>googlefonts</title> <path d="M14.874 5.479l-13.893 22.035h11.015l2.879-4.556zM24.511 14.498v13.017c3.595 0 6.509-2.914 6.509-6.509s-2.914-6.509-6.509-6.509v0zM24.511 4.485v10.013c2.765 0 5.007-2.242 5.007-5.007s-2.242-5.007-5.007-5.007v0zM15.499 4.485v23.030h9.012c-3.595 0-6.509-2.914-6.509-6.509s2.914-6.509 6.509-6.509v0c-2.765 0-5.007-2.242-5.007-5.007s2.242-5.007 5.007-5.007v0zM5.987 4.485c0 0-0 0-0 0-2.489 0-4.506 2.017-4.506 4.506s2.017 4.506 4.506 4.506c2.489 0 4.506-2.017 4.506-4.506 0-0.83-0.224-1.607-0.615-2.274l0.011 0.021c-0.794-1.356-2.243-2.253-3.902-2.253v0z"></path> </g></svg>}
                                    title="Print Design"
                                    description="Designing high-quality print materials that make a lasting impression."
                                />
                                <ServiceCard
                                    icon={<svg className="h-10 w-auto ml-0.5 -mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 5.99985L6.50182 7.29948C6.13883 7.37208 5.95733 7.40838 5.80952 7.49665C5.67886 7.57469 5.56772 7.68152 5.4846 7.80901C5.39057 7.95321 5.34714 8.13314 5.26028 8.49299L2 21.9998M2 21.9998L15.5069 18.7396C15.8667 18.6527 16.0466 18.6093 16.1908 18.5153C16.3183 18.4321 16.4252 18.321 16.5032 18.1903C16.5915 18.0425 16.6278 17.861 16.7004 17.498L18 10.9998M2 21.9998L9.586 14.4138M20.8686 7.86848L16.1314 3.13122C15.7354 2.7352 15.5373 2.53719 15.309 2.46301C15.1082 2.39775 14.8918 2.39775 14.691 2.46301C14.4627 2.53719 14.2646 2.7352 13.8686 3.13122L13.1314 3.86848C12.7354 4.2645 12.5373 4.4625 12.4632 4.69083C12.3979 4.89168 12.3979 5.10802 12.4632 5.30887C12.5373 5.53719 12.7354 5.7352 13.1314 6.13122L17.8686 10.8685C18.2646 11.2645 18.4627 11.4625 18.691 11.5367C18.8918 11.6019 19.1082 11.6019 19.309 11.5367C19.5373 11.4625 19.7354 11.2645 20.1314 10.8685L20.8686 10.1312C21.2646 9.7352 21.4627 9.53719 21.5368 9.30887C21.6021 9.10802 21.6021 8.89168 21.5368 8.69083C21.4627 8.4625 21.2646 8.2645 20.8686 7.86848ZM11 10.9998C12.1046 10.9998 13 11.8953 13 12.9998C13 14.1044 12.1046 14.9998 11 14.9998C9.89543 14.9998 9 14.1044 9 12.9998C9 11.8953 9.89543 10.9998 11 10.9998Z" stroke="#198898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
                                    title="Illustration"
                                    description="Creating custom illustrations that add a unique touch to your branding and marketing materials."
                                />
                                <ServiceCard
                                    icon={<svg className="h-10 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8ZM9 16L21 16M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z" stroke="#198898" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
                                    title="Custom Design"
                                    description="Tailored design solutions to meet your specific needs and objectives."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphicDesignServices;
