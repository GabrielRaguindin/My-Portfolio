"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProjectMenu from "./ProjectMenu";
import { Breadcrumb, Card, Button, Badge, Modal, Tooltip } from "flowbite-react";
export default function ProjectSection() {

    const [items, setItems] = useState(ProjectMenu);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");

    const filterItems = (categoryItem) => {
        if (activeCategory === categoryItem) return;

        setIsTransitioning(true);
        setActiveCategory(categoryItem);

        setTimeout(() => {
            const updatedItems = ProjectMenu.filter((currentElement) => {
                return currentElement.category === categoryItem;
            });

            setItems(updatedItems);
            setIsTransitioning(false);
        }, 300);
    }

    const resetItems = () => {
        if (activeCategory === "All") return;

        setIsTransitioning(true);
        setActiveCategory("All");

        setTimeout(() => {
            setItems(ProjectMenu);
            setIsTransitioning(false);
        }, 300);
    };

    const openModal = (project) => {
        setSelectedProject(project);
        setIsOpenModal(true);
    }

    const closeModal = () => {
        setSelectedProject(null);
        setIsOpenModal(false);
    }

    return (
        <section id="projects" className="flex flex-col gap-4 text-center">
            <h1 className="text-2xl text-slate-700 text-left dark:text-slate-200">Recent Projects</h1>
            <div>
                <Breadcrumb aria-label="Breadcrumb">
                    <Breadcrumb.Item tabIndex="0"
                        className="cursor-pointer hover:underline focus:text-teal-500 focus:underline decoration-2 transition-all"
                        onClick={resetItems}>All Works</Breadcrumb.Item>

                    <Breadcrumb.Item tabIndex="0"
                        className="cursor-pointer hover:underline focus:text-teal-500 focus:underline decoration-2 transition-all"
                        onClick={() => filterItems("Application")}>Applications</Breadcrumb.Item>

                    <Breadcrumb.Item tabIndex="0"
                        className="cursor-pointer hover:underline focus:text-teal-500 focus:underline decoration-2 transition-all"
                        onClick={() => filterItems("Website")}>Websites</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div>
                <div className={`grid grid-cols-3 justify-start gap-3 transition-opacity duration-300 ease-in-out transform 
                                ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                    {items.map((element) => {
                        const { id, title, category, color } = element;
                        return (
                            <Card key={id} className="rounded-2xl shadow-lg dark:bg-neutral-900 dark:border-0 transition-transform duration-300 ease-in-out">
                                <Badge color={color} className="w-[35%] flex justify-center font-medium">
                                    {category}
                                </Badge>
                                <h1 className="text-base text-slate-700 text-left dark:text-slate-200">{title}</h1>
                                <div className="flex justify-end">
                                    <Button outline gradientDuoTone="tealToLime"
                                        size="sm"
                                        className="transform hover:scale-105 active:scale-100 transition duration-200 focus:ring-0"
                                        onClick={() => openModal(element)}>
                                        Take a look
                                    </Button>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>

            {selectedProject && (
                <Modal dismissible show={isOpenModal} onClose={closeModal} size="4xl" className="modal-font">
                    <Modal.Body className="mb-5">
                        <h1 className="text-2xl text-slate-700 text-center mb-5 dark:text-slate-200">{selectedProject.title}</h1>
                        <div className="flex flex-row gap-3">
                            <div className="w-1/2 flex justify-center border-r-4">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    width={selectedProject.width}
                                    height={selectedProject.height}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col ml-3">
                                <Badge color={selectedProject.color}
                                    className="w-[35%] flex justify-center font-medium mb-4">{selectedProject.category}</Badge>
                                <h1 className="text-base text-slate-700 text-left mb-1 dark:text-slate-200">Description</h1>
                                <p className="text-sm font-light leading-relaxed">{selectedProject.details}</p>

                                <h1 className="text-base text-slate-700 text-left mb-1 mt-4 mb-2 dark:text-slate-200">Technologies</h1>
                                <div className="flex items-center gap-3">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <Tooltip key={index} content={tech.label} placement="top" style="light">
                                            <tech.icon
                                                className="text-4xl hover:scale-125 transition duration-200"
                                                style={{ color: tech.color }} />
                                        </Tooltip>
                                    ))}
                                </div>
                                {selectedProject.link && (
                                    <div className="flex flex-col">
                                        <h1 className="text-base text-slate-700 text-left mb-1 mt-4 dark:text-slate-200">Repository</h1>
                                        <Link href={selectedProject.link}
                                            className="font-light text-sm text-slate-700 text-left 
                                            hover:underline hover:text-teal-500 dark:text-slate-200 dark:hover:text-teal-300">
                                            {selectedProject.link}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </section>
    );
}