import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 bg-gray-600 rounded-md">
                {icon}
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-2 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};

const GraphicDesignServices = () => {
    return (
        <div className="container mx-auto pt-0 pb-48" id="Services">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <p className="text-sm font-semibold text-gray-400">Creative</p>
                    <h2 className="text-4xl font-bold mt-2 mb-4 text-white">
                        Transforming Ideas into Stunning Designs
                    </h2>
                </div>
                <div className="col-span-1">
                    <p className="text-gray-300">
                        Our graphic design studio offers a range of key services to help businesses establish a strong brand presence. From branding and digital design to print materials, we have the expertise to bring your vision to life. With a focus on creativity and attention to detail, we deliver stunning designs that captivate and engage your target audience.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <ServiceCard
                    icon={<img className="block w-8 h-8" src="/Bullet2.webp" alt="Branding Icon" />}
                    title="Branding Solutions"
                    description="Branding solutions that create a strong and memorable identity for your business."
                />
                <ServiceCard
                    icon={<img className="block w-8 h-8" src="/Bullet2.webp" alt="Web Design Icon" />}
                    title="Web Design"
                    description="Crafting user-friendly and visually appealing websites tailored to your business needs."
                />
                <ServiceCard
                    icon={<img className="block w-8 h-8" src="/Bullet2.webp" alt="Print Design Icon" />}
                    title="Print Design"
                    description="Designing high-quality print materials that make a lasting impression."
                />
                <ServiceCard
                    icon={<img className="block w-8 h-8" src="/Bullet2.webp" alt="Illustration Icon" />}
                    title="Illustration"
                    description="Creating custom illustrations that add a unique touch to your branding and marketing materials."
                />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
                    Learn More
                </button>
                <button className="hidden md:block py-3 bg-gray-700 text-gray-200 font-semibold rounded-md hover:bg-gray-600 transition duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default GraphicDesignServices;