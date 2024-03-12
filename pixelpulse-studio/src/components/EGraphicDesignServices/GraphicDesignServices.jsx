import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-12 w-12 bg-gray-200 rounded-md">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

const GraphicDesignServices = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <p className="text-sm font-semibold text-gray-500">Creative</p>
                    <h2 className="text-4xl font-bold mt-2 mb-4 text-wrap">
                        Transforming Ideas into Stunning Designs
                    </h2>
                </div>
                <div className="col-span-1">
                    <p className="text-gray-700">
                        Our graphic design studio offers a range of key services to help businesses establish a strong brand presence. From branding and digital design to print materials, we have the expertise to bring your vision to life. With a focus on creativity and attention to detail, we deliver stunning designs that captivate and engage your target audience.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <div className="grid grid-cols-1 gap-4">
                        <ServiceCard
                        icon="<img className='block' src='./public/Bullet2.webp' alt='Icon'>"
                        title="Branding Solutions"
                        description="Branding solutions that create a strong and memorable identity for your business."
                        />
                        {/* Aquí añadirías las otras tres ServiceCards con sus respectivos datos */}
                    </div>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4">
                <button className="col-span-4 md:col-span-1 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">Learn More</button>
                <button className="hidden md:block col-span-4 md:col-span-1 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition duration-300">Get Started</button>
            </div>
        </div>
    );
};

export default GraphicDesignServices;

