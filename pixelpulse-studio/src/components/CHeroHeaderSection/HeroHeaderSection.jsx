import React, { useRef, useEffect, useState } from 'react';
import { MapIcon } from '@heroicons/react/20/solid'
import './HeroHeaderSection.css';

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
        <div className="hero-container h-screen flex">
            <div className="flex-1 flex items-center justify-center text-white -mt-10 ml-16 -mr-10">
                <div>
                    <h1 className="text-4xl text-pretty sm:text-5xl lg:text-6xl font-bold mb-6 text-wrap">Unleash Your Creativity with&nbsp;
                        <span className='gradient-text text-shadow'>PixelPulse Studio</span>
                    </h1>
                    <p className="text-lg text-pretty sm:text-xl lg:text-2xl mb-8 mr-28">We are a <span className='gradient-text'>modern</span> and <span className='gradient-text'>innovative</span> design studio, specializing in creating visually stunning graphics that captivate and <span className='gradient-text'>engage</span> your audience.</p>
                    <button className="flex items-center justify-center bg-transparent border-2 border-white rounded-full px-6 py-3 transition duration-300 hover:bg-white hover:text-black">
                        Explore
                        <MapIcon className="ml-3 -mr-1 w-6 h-6" />
                    </button>
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