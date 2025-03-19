import React from 'react';
import Head from 'next/head';

const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "A smart dashboard with AI insights.",
      languages: ["JavaScript", "Python"],
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution.",
      languages: ["React", "Python", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js.",
      languages: ["TypeScript", "Next.js", "TailwindCSS"],
    },
  ];
  
const ProjectsPage: React.FC = () => {
    return (
        <div className=''>
            <Head>
                <title>Projects</title>
                <meta name="description" content="List of projects" />
            </Head>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
            <div className = "grid gap-8 lg:grid-cols-2">
                {projects.map(project => (
                    <div className = 'p-8 bg-white hover:bg-white rounded-lg shadow-2xl dark:bg-gray-900 dark:border-gray-700 dark: hover:bg-gray-800 group'>

                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;