import React, { useRef, useEffect, useState } from 'react';
import { LinkIcon } from '@heroicons/react/20/solid';
import './HeroSection.css';

const HeroHeaderSection = () => {
    const videoRef = useRef(null);
    const [videoOpacity, setVideoOpacity] = useState(1);

    useEffect(() => {
        const video = videoRef.current;

        const fadeInVideo = () => {
            setVideoOpacity(1);
        };

        const playVideo = () => {
            video.src = "/public/Videos.mp4";
            video.load();
            video.play();
            setTimeout(fadeInVideo, 1000);
        };

        if (video) {
            playVideo();
        }

        return () => {
            if (video) {
                video.pause();
            }
        };
    }, []);

    return (
        <div className="hero-container h-screen flex mb-0" id="Home">
            <div className="flex-1 flex items-center justify-center text-white ml-16 -mr-10">
                <div className="pt-20">
                    <h1 className="text-4xl text-pretty sm:text-5xl lg:text-6xl font-bold mb-6 text-wrap fade-in-up fade-in-up-h1">
                        Unleash Your Creativity with&nbsp;
                        <span className='gradient-text text-shadow moving-gradient'>PixelPulse Studio</span>
                    </h1>
                    <p className="text-lg text-pretty sm:text-xl lg:text-2xl mb-8 mr-28 fade-in-up fade-in-up-p">
                        We are a <span className='gradient-text'>modern</span> and <span className='gradient-text'>innovative</span> design studio, specializing in creating visually stunning graphics that captivate and <span className='gradient-text'>engage</span> your audience.
                    </p>
                    <div className='flex'>
                        <a href="#Projects" className="mr-5 flex items-center justify-center bg-transparent border-2 border-white rounded-lg px-6 py-3 transition duration-300 hover:bg-white hover:text-black fade-in-up fade-in-up-btn-explore">
                            Explore
                        </a>
                        <a href="#" className="flex items-center justify-center bg-transparent border-2 border-white rounded-lg px-6 py-3 transition duration-300 hover:bg-white hover:text-black fade-in-up fade-in-up-btn-learn-more">
                            Learn More
                            <LinkIcon className="ml-3 -mr-1 w-6 h-6 focus:text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Sección de video a la derecha */}
            <div className='flex-1 relative'>
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    loop
                    muted
                    autoPlay
                    style={{ opacity: videoOpacity }}
                />
            </div>
        </div>
    );
};

export default HeroHeaderSection;