"use client";

import {
    RiHtml5Fill,
    RiNextjsFill,
    RiNodejsFill,
    RiReactjsFill,
    RiTailwindCssFill
} from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt, FaGithub } from "react-icons/fa";

import { Tooltip } from "flowbite-react";

export default function AboutSection() {
    return (
        <section id="about" className="flex flex-col text-center text-slate-800 mb-10 mt-10">
            <div className="flex flex-row justify-evenly">
                <div className="w-1/2 text-center text-slate-700 border-r-4 dark:text-slate-200">
                    <h1 className="text-center text-2xl mb-6">
                        Get to know me
                    </h1>
                    <p className="font-light">
                        Greetings! My name is Gabriel and I am an aspiring{" "} <br />
                        <span className="font-medium text-teal-400">{"Virtual Assistant "}</span>,
                        <span className="font-medium text-teal-400">{" Web Developer "}</span>, and
                        <span className="font-medium text-teal-400">{" Tech Support"}</span> <br />
                        based in Pangasinan, Philippines.
                    </p>
                    <br />
                    <p className="font-light">
                        I studied in Lyceum-Northwestern University <br />
                        with a Bachelor&apos;s Degree in Information Technology
                    </p>
                    <br />
                    <p className="font-light">
                        I have a wide range of passions that keep me busy. <br />
                        From coding , playing musical instruments , to reading , <br />
                        I am always seeking new experiences and love learning <br />
                        new things that pique my interest.
                    </p>
                </div>
                <div className="flex flex-col text-center w-1/2 dark:text-slate-200">
                    <h1 className="text-2xl mb-3 text-slate-700 dark:text-slate-200">My Skills</h1>
                    <div className="flex justify-center">
                        <div className="flex flex-row gap-5">
                            <div className="w-1/2">
                                <ul className="list-disc leading-loose list-outside text-left">
                                    Hard Skills
                                    <li className="font-light">Virtual Assistance</li>
                                    <li className="font-light">Social Media Management</li>
                                    <li className="font-light">Web Development</li>
                                    <li className="font-light">UI/UX Design</li>
                                    <li className="font-light">Technical Support</li>
                                </ul>
                            </div>
                            <div className="w-1/2">
                                <ul className="list-disc leading-loose list-inside text-left">
                                    Soft Skills
                                    <li className="font-light">Problem Solving</li>
                                    <li className="font-light">Analytical Skills</li>
                                    <li className="font-light">Teamwork</li>
                                    <li className="font-light">Communication</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl mt-5 text-slate-700 dark:text-slate-200">Tech Stacks</h1>
                        <div className="flex flex-row gap-2 justify-center mt-4">
                            <Tooltip content="HTML" style="light">
                                <RiHtml5Fill className="text-4xl text-orange-500 hover:scale-125 transition duration-200" />
                            </Tooltip>

                            <Tooltip content="CSS" style="light">
                                <IoLogoCss3 className="text-4xl text-blue-500 hover:scale-125 transition duration-200" />
                            </Tooltip>

                            <Tooltip content="JavaScript" style="light">
                                <IoLogoJavascript className="text-4xl text-yellow-300 hover:scale-125 transition duration-200" />
                            </Tooltip>

                            <Tooltip content="Tailwind CSS" style="light">
                                <RiTailwindCssFill className="text-4xl text-sky-500 hover:scale-125 transition duration-200" />
                            </Tooltip>

                            <Tooltip content="React JS" style="light">
                                <RiReactjsFill className="text-4xl text-sky-500 hover:scale-125 transition duration-200" />
                            </Tooltip>

                            <Tooltip content="Node JS" style="light">
                                <RiNodejsFill className="text-4xl text-green-500 hover:scale-125 transition duration-200" />
                            </Tooltip>

                            <Tooltip content="Next JS" style="light">
                                <RiNextjsFill className="text-4xl text-slate-900 dark:text-slate-100 hover:scale-125 transition duration-200" />
                            </Tooltip>

                            <Tooltip content="Git" style="light">
                                <FaGitAlt className="text-4xl text-red-500 hover:scale-125 transition duration-200" />
                            </Tooltip>

                            <Tooltip content="GitHub" style="light">
                                <FaGithub className="text-4xl text-slate-900 dark:text-slate-100 hover:scale-125 transition duration-200" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}