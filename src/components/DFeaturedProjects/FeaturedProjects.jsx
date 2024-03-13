import React from 'react';
import { Badge, Button } from 'flowbite-react';
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const projects = [
    { id: 1, title: 'Minimalist Brand Identity', image: '/project1.jpg', description: 'Elegant and sleek brand identity design for a minimalist lifestyle brand. Clean lines and subtle colors.', type: 'Branding - Logo - Identity', link: '#' },
    { id: 2, title: 'Vibrant Packaging Design', image: '/project2.jpg', description: 'Eye-catching packaging design for a trendy cosmetics line. Bold colors and playful typography.', type: 'Print Design - Packaging - Brochure', link: '#' },
    { id: 3, title: 'Interactive Website Redesign', image: '/project3.jpg', description: 'Revamped website design for a tech startup. Modern layout and seamless user experience.', type: 'Website Design - UI/UX - Responsive', link: '#' },
    { id: 4, title: 'Illustrated Poster Series', image: '/project4.jpg', description: 'Series of illustrated posters for a cultural event. Captivating visuals and storytelling.', type: 'Illustration - Digital Art', link: '#' },
    { id: 5, title: 'Typography Exploration', image: '/project5.jpg', description: 'Experimental typography project exploring new fonts and compositions. Bold and dynamic designs.', type: 'Typography - Experimental Design', link: '#' },
    { id: 6, title: 'Sustainable Product Packaging', image: '/project6.jpg', description: 'Environmentally-friendly packaging design for a sustainable food brand. Earthy tones and eco-conscious messaging.', type: 'Packaging Design - Sustainable Design', link: '#' },
];

const Projects = () => {
    // Organizar los proyectos para que coincidan con el diseño deseado
    const groupedProjects = [
        [projects[0], projects[3]],
        [projects[1], projects[4]],
        [projects[2], projects[5]],
    ];

    return (
        <div className="text-center pt-20 text-white bg-slate-800 pb-8">
            <div className="text-xl mb-6">Projects</div>
            <h1 className="text-6xl font-bold mb-6">Discover Amazing Design Projects</h1>
            <div className="text-xl mb-20">Explore our curated collection of outstanding graphic design projects.</div>
            <div className="container mx-auto pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    {/* Mapear cada grupo de proyectos */}
                    {groupedProjects.map((group, index) => (
                        <div key={index} className="md:col-span-1">
                            {/* Mapear cada proyecto en el grupo */}
                            {group.map(project => (
                                <div key={project.id} className="text-left mb-20">
                                    <img src={project.image} alt={project.title} className="w-full mb-4 align-center mx-auto" />
                                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                    <p className="mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.type.split(' - ').map((type, index) => (
                                            <Badge color="indigo" key={index}>{type}</Badge>
                                        ))}
                                    </div>
                                    <a href={project.link} className="flex items-center text-sm text-emerald-500 hover:text-emerald-600">
                                        View project
                                        <ChevronRightIcon className="ml-1 w-4 h-4 focus:text-cyan-400" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Button gradientDuoTone="greenToBlue" className='mx-auto -mt-16 mb-20'>View All</Button>
        </div>
    );
};

export default Projects;