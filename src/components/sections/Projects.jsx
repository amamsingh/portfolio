import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const projectsData = [
    {
        title: "E-Commerce Microservices",
        description: "A scalability-first e-commerce backend built with Spring Boot Microservices. Features include service discovery (Eureka), API Gateway, and distributed tracing.",
        tags: ["Java", "Spring Boot", "Microservices", "Docker", "MySQL"],
        github: "#",
        demo: "#",
        image: null
    },
    {
        title: "Task Management System",
        description: "Full-stack application for managing tasks and projects. Includes real-time updates, user authentication, and drag-and-drop interface.",
        tags: ["React", "Tailwind", "Spring Security", "JWT", "PostgreSQL"],
        github: "#",
        demo: "#",
        image: null
    },
    {
        title: "Real-time Chat App",
        description: "A WebSocket-based chat application allowing users to join rooms and send messages in real-time. Built to demonstrate high-concurrency handling.",
        tags: ["Java", "Spring WebSocket", "React", "Redis"],
        github: "#",
        demo: "#",
        image: null
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] -z-10" />
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Somethings I've Built" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
