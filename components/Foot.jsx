"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaUpwork } from "react-icons/fa6";

export default function Foot() {
    return (
        <Footer container className="font-poppins dark:bg-inherit">
            <div className="w-full">
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="https://github.com/GabrielRaguindin" by="Gabriel Raguindin™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon className="hover:text-sky-500 dark:hover:text-sky-500 transition duration-200" 
                            href="https://www.linkedin.com/in/gabrielraguindin" icon={BsLinkedin} />

                        <Footer.Icon className="hover:text-lime-500 dark:hover:text-lime-500 transition duration-200"
                            href="https://www.upwork.com/freelancers/~015f91d8e18975bdc8?mp_source=share" icon={FaUpwork} />

                        <Footer.Icon className="hover:text-black dark:hover:text-white transition duration-200" 
                            href="https://github.com/GabrielRaguindin" icon={BsGithub} />

                        <Footer.Icon className="hover:text-blue-700 dark:hover:text-blue-700 transition duration-200" 
                            href="https://www.facebook.com/xamdsx" icon={BsFacebook} />

                        <Footer.Icon className="hover:text-rose-400 dark:hover:text-rose-400 transition duration-200" 
                            href="https://www.instagram.com/amadeuuuzz" icon={BsInstagram} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}