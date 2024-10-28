import React, { useRef, useEffect, useState } from 'react';
import { LinkIcon } from '@heroicons/react/20/solid';
import './HeroSection.css';

const HeroHeaderSection = () => {
    const videoRefSmall = useRef(null);
    const videoRefLarge = useRef(null);
    const [videoOpacity, setVideoOpacity] = useState(1);

    useEffect(() => {
        const videoSmall = videoRefSmall.current;
        const videoLarge = videoRefLarge.current;

        const fadeInVideo = () => {
            setVideoOpacity(1);
        };

        const playVideo = (video) => {
            if (video) {
                video.src = "/Videos.mp4";
                video.load();
                video.play().catch(error => console.error("Error playing video:", error));
                setTimeout(fadeInVideo, 1000);
            }
        };

        if (videoSmall) playVideo(videoSmall);
        if (videoLarge) playVideo(videoLarge);

        return () => {
            if (videoSmall) videoSmall.pause();
            if (videoLarge) videoLarge.pause();
        };
    }, []);

    return (
        <div className="hero-container h-screen flex mb-0 relative" id="Home">
            <div className="flex-1 flex items-center justify-center text-white ml-0 md:ml-16 mr-0 md:-mr-10 relative z-10">
                <div className="pt-20 text-center md:text-left">
                    <h1 className="text-4xl text-pretty sm:text-5xl lg:text-6xl font-bold mb-6 fade-in-up fade-in-up-h1 drop-shadow-xl md:drop-shadow-none">
                        Unleash Your Creativity with&nbsp;
                        <span className='block gradient-text text-shadow moving-gradient'>PixelPulse Studio</span>
                    </h1>
                    <p className="text-lg text-pretty sm:text-xl lg:text-2xl mb-8 mx-10 md:ml-0 md:mr-28 fade-in-up fade-in-up-p drop-shadow-xl md:drop-shadow-none">
                        We are a <span className='gradient-text'>modern</span> and <span className='gradient-text'>innovative</span> design studio, specializing in creating visually stunning graphics that captivate and <span className='gradient-text'>engage</span> your audience.
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <a href="#Projects" className="mr-5 flex items-center justify-center bg-transparent border-2 border-white rounded-lg px-6 py-3 transition duration-300 hover:bg-white hover:text-black fade-in-up fade-in-up-btn-explore drop-shadow-xl md:drop-shadow-none">
                            Explore
                        </a>
                        <a href="#" className="flex items-center justify-center bg-transparent border-2 border-white rounded-lg px-6 py-3 transition duration-300 hover:bg-white hover:text-black fade-in-up fade-in-up-btn-learn-more drop-shadow-xl md:drop-shadow-none">
                            Learn More
                            <LinkIcon className="ml-3 -mr-1 w-6 h-6 focus:text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 z-0 h-full w-full md:hidden">
                <video
                    ref={videoRefSmall}
                    className="w-full h-full object-cover opacity-50 transition-opacity duration-500"
                    loop
                    muted
                    playsInline
                    style={{ opacity: videoOpacity }}
                />
            </div>

            <div className='hidden md:flex md:flex-1 relative'>
                <video
                    ref={videoRefLarge}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    loop
                    muted
                    playsInline
                    style={{ opacity: videoOpacity }}
                />
            </div>
        </div>
    );
};

export default HeroHeaderSection;