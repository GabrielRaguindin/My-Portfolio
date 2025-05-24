import { FaPython, FaBootstrap, FaJava } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { SiCodeigniter, SiMysql, SiPhp, SiVite, SiAndroidstudio, SiPostman } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { RiHtml5Fill, RiReactjsFill, RiNodejsFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";

const ProjectMenu = [
    {
        id: 1,
        image: "/Project_1.jpg",
        title: "Photo Editor Application",
        category: "Application",
        color: "info",
        width: 240,
        height: 240,
        details: "A Photo Editor Application made in Python, Tkinter, and Python Imaging Library (PIL). It supports a wide range of image editing features.",
        technologies: [
            { icon: FaPython, label: "Python", color: "#3572A5" },
            { icon: GiFeather, label: "Tkinter", color: "#3c99dc" },
        ],
        link: "https://github.com/GabrielRaguindin/Python-Projects"
    },
    {
        id: 2,
        image: "/Project_2.jpg",
        title: "Student Management System",
        category: "Website",
        color: "success",
        width: 350,
        height: 350,
        details: "A web-based system for managing student records and subject details, implemented using CodeIgniter Framework.",
        technologies: [
            { icon: SiPhp, label: "PHP", color: "#787cb5" },
            { icon: SiCodeigniter, label: "CodeIgniter", color: "#DD4814" },
            { icon: DiJqueryLogo, label: "jQuery", color: "#0868ac" },
            { icon: SiPostman, label: "Postman", color: "#FF6C37" },
            { icon: SiMysql, label: "MySQL", color: "#4479A1" },
        ],
        link: "https://github.com/GabrielRaguindin/CodeIgniter4-CRUD"
    },
    {
        id: 3,
        image: "/Project_3.jpg",
        title: "E-Commerce Landing Page",
        category: "Website",
        color: "success",
        width: 270,
        height: 270,
        details: "A visually appealing landing page for an e-commerce business with product showcases. Utilized Bootstrap CSS Framework",
        technologies: [
            { icon: RiHtml5Fill, label: "HTML", color: "#F06529"},
            { icon: IoLogoCss3, label: "CSS", color: "#3c99dc"},
            { icon: FaBootstrap, label: "Bootstrap", color: "#b32cd1"}
        ],
        link: "https://github.com/GabrielRaguindin/Bootstrap5-LandingPage"
    },
    {
        id: 4,
        image: "/Project_4.jpg",
        title: "Login and Signup Page",
        category: "Website",
        color: "success",
        width: 240,
        height: 240,
        details: "A responsive login and signup interface using RESTful API Architecture. This project includes user authentication and a robust database.",
        technologies: [
            { icon: RiReactjsFill, label: "React JS", color: "#61dbfb"},
            { icon: FaBootstrap, label: "Bootstrap", color: "#b32cd1"},
            { icon: SiPostman, label: "Postman", color: "#FF6C37"},
            { icon: SiCodeigniter, label: "CodeIgniter", color: "#DD4814"},
            { icon: SiMysql, label: "MySQL", color: "#4479A1" },
            { icon: SiVite, label: "Vite", color: "#646cff"}
        ],
        link: "https://github.com/GabrielRaguindin/RestAPI"
    },
    {
        id: 5,
        image: "/Project_5.PNG",
        title: "Tic-Tac-Toe Android Game",
        category: "Application",
        color: "info",
        width: 200,
        height: 200,
        details: "A simple and fun 2 Player Tic-Tac-Toe Mobile Game for Android. Developed using Android Studio and Java.",
        technologies: [
            { icon: SiAndroidstudio, label: "Android Studio", color: "#3DDC84"},
            { icon: FaJava, label: "Java", color: "#f89820"},
        ],
        link: "https://github.com/GabrielRaguindin/Java-iPlay"
    },
    {
        id: 6,
        image: "/Project_6.jpg",
        title: "SecuSim",
        category: "Application",
        color: "info",
        width: 370,
        height: 370,
        details: "My Capstone Project, an interactive and comprehensible learning environment to students who are new to the concepts of computer networking through a virtual simulation.",
        technologies: [
            { icon: IoLogoJavascript, label: "JavaScript", color: "#F7DF1E" },
            { icon: RiNodejsFill, label: "Node JS", color: "#3C873A" },
            { icon: RiNextjsFill, label: "Next JS", color: "#000000" },
            { icon: RiTailwindCssFill, label: "Tailwind CSS", color: "#38BDF8" },
        ],
        link: "https://github.com/GabrielRaguindin/SecuSim"
    },
];

export default ProjectMenu;