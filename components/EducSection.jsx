"use client";

import Link from "next/link";
import { Timeline } from "flowbite-react";
import { FaGraduationCap } from "react-icons/fa";
export default function EducSection() {
    return (
        <section id="education" className="flex flex-col gap-4 mb-10">
            <div className="flex flex-row">
                <FaGraduationCap className="text-3xl text-slate-700 text-left dark:text-slate-200"/>
                <h1 className="text-2xl text-slate-700 text-left ml-3 dark:text-slate-200">Education</h1>
            </div>
            <div className="ml-3">
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>April 2025</Timeline.Time>
                            <Timeline.Title className="text-slate-700 font-medium dark:text-slate-200">Lyceum-Nortwestern University</Timeline.Title>
                            <Timeline.Body className="font-light dark:text-slate-200">
                                Graduated with a Bachelor&apos;s Degree in Information Technology
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>May 2024</Timeline.Time>
                            <Timeline.Title className="text-slate-700 font-medium dark:text-slate-200">VA Training Philippines</Timeline.Title>
                            <Timeline.Body className="font-light dark:text-slate-200">
                                Completed a Virtual Assistant and Social Media Management Training Program
                            </Timeline.Body>
                            <Link href="https://d1zpw5mq5bnzyn.cloudfront.net/images/947380c1b21843f1a90391cedf113a5d.jpeg"
                                className="text-base font-light text-teal-500 dark:text-teal-400 transition duration-200
                                hover:text-teal-600 dark:hover:text-teal-600"
                            >
                                View Certificate
                            </Link>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>March 2020</Timeline.Time>
                            <Timeline.Title className="text-slate-700 font-medium dark:text-slate-200">Dagupan City National High School</Timeline.Title>
                            <Timeline.Body className="font-light dark:text-slate-200">
                                Graduated with a National Certificate II in Computer Systems Servicing
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </section>
    );
}