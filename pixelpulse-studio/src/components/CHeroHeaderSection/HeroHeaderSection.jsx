import React, { useRef, useEffect, useState } from 'react';
import { LinkIcon } from '@heroicons/react/20/solid';
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
    const [videoOpacity, setVideoOpacity] = useState(1);

    useEffect(() => {
        const video = videoRef.current;

        const playNextVideo = () => {
            const nextIndex = (currentVideoIndex + 1) % videoSources.length;
            setVideoOpacity(0);
        
            setTimeout(() => {
                setCurrentVideoIndex(nextIndex);
                setVideoOpacity(1); // Hacer que el siguiente video aparezca gradualmente
                videoRef.current.play(); // Comenzar a reproducir el siguiente video
            }, 1000); // Ajusta la duración según tus preferencias
        };        

        const intervalId = setInterval(playNextVideo, 8000);

        if (video) {
            video.src = videoSources[currentVideoIndex];
            video.play();
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [currentVideoIndex, videoSources]);

    return (
        <div className="hero-container h-screen flex mb-0">
            <div className="flex-1 flex items-center justify-center text-white -mt-10 ml-16 -mr-10">
                <div>
                    <h1 className="text-4xl text-pretty sm:text-5xl lg:text-6xl font-bold mb-6 text-wrap">Unleash Your Creativity with&nbsp;
                        <span className='gradient-text text-shadow moving-gradient'>PixelPulse Studio</span>
                    </h1>
                    <p className="text-lg text-pretty sm:text-xl lg:text-2xl mb-8 mr-28">We are a <span className='gradient-text'>modern</span> and <span className='gradient-text'>innovative</span> design studio, specializing in creating visually stunning graphics that captivate and <span className='gradient-text'>engage</span> your audience.</p>
                    <div className='flex'>
                        <button className="mr-5 flex items-center justify-center bg-transparent border-2 border-white rounded-lg px-6 py-3 transition duration-300 hover:bg-white hover:text-black">
                            Explore
                        </button>
                        <button className="flex items-center justify-center bg-transparent border-2 border-white rounded-lg px-6 py-3 transition duration-300 hover:bg-white hover:text-black">
                            Learn More
                            <LinkIcon className="ml-3 -mr-1 w-6 h-6 focus:text-cyan-400" />
                        </button>
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