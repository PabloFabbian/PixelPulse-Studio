import React, { useRef, useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const HeroHeaderSection = () => {
    const videoSources = [
        "/public/Sketches.mp4",
        "/public/Studio.mp4",
        "/public/GraphicTab.mp4",
        "/public/HomeOffice.mp4"
    ];

    const videoRef = useRef(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const video = videoRef.current;

        const playNextVideo = () => {
            const nextIndex = (currentVideoIndex + 1) % videoSources.length;
            setCurrentVideoIndex(nextIndex);
        };

        video.addEventListener('ended', playNextVideo);

        return () => {
            video.removeEventListener('ended', playNextVideo);
        };
    }, [currentVideoIndex]);

    return (
        <div className="bg-black h-screen flex">
            <div className="flex-1 flex items-center justify-center text-white ml-16 -mr-10">
                <div>
                    <h1 className="text-4xl text-pretty sm:text-5xl lg:text-6xl font-bold mb-6 text-wrap">Unleash Your Creativity with PixelPulse Studio</h1>
                    <p className="text-lg text-pretty sm:text-xl lg:text-2xl mb-8 mr-28">We are a modern and innovative design studio, specializing in creating visually stunning graphics that captivate and engage your audience.</p>
                    <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex items-center justify-center bg-transparent border-2 border-white rounded-full px-6 py-3 transition duration-300 hover:bg-white hover:text-black">
                                Get Started
                                <ArrowRightIcon
                                className={`${
                                    open ? 'transform rotate-90' : ''
                                } w-6 h-6 ml-2`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-4">
                                {/* Your form or other call to action content goes here */}
                            </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
            {/* Sección de video a la derecha */}
            <div className='flex-1 relative'>
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                >
                    <source src={videoSources[currentVideoIndex]} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default HeroHeaderSection;