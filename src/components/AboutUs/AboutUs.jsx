import React from 'react';
import { Button } from 'flowbite-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    return (
        <section className="bg-[#161F31] pt-16 pb-12 mb-16" id="About">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="relative inline-block">
                        <h2 className="text-5xl font-bold mb-4 text-white relative z-10">
                            About PixelPulse Studio
                        </h2>
                        <div className="absolute inset-[-2%] bg-gradient-to-r from-green-400 to-blue-500 opacity-30 blur-md rounded-full"></div>
                    </div>
                    <motion.div
                        className="text-lg mb-6 text-gray-300 mt-6"
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                    >
                        At PixelPulse Studio, we turn design ideas into impactful visual stories. Our blend of creativity and technology ensures each project is approached with passion and precision.
                    </motion.div>
                    <motion.div
                        className="text-lg mb-6 text-gray-300"
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We focus on innovation and attention to detail, crafting designs that not only look great but also communicate your brand’s unique voice. From branding to web design, we tailor our services to exceed your expectations.
                    </motion.div>
                    <motion.div
                        className="text-lg text-gray-300"
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Join us on a creative journey. Discover how our expertise can elevate your brand and captivate your audience.
                    </motion.div>
                    <motion.div
                        className="text-lg mb-2 text-gray-300 mt-6"
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.8, delay:0.7 }}
                    >
                        <Button className="inline-block py-1 px-2 mt-4 transition-transform duration-200 transform hover:scale-125 hover:translate-y-[-4px]" gradientMonochrome="success">
                            Join our Newsletter
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;