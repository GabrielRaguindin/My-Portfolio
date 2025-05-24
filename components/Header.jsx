"use client";

import { Navbar, ToggleSwitch } from "flowbite-react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    const handleToggleChange = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    return (
        <Navbar fluid rounded className="font-poppins dark:bg-inherit">
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-medium text-slate-700 dark:text-slate-200">
                    Gabriel Raguindin
                </span>
            </Navbar.Brand>
            <div className="flex flex-row gap-3 items-center">
                <FaSun size={25} className={currentTheme === "light" ? "text-yellow-300" : "text-neutral-600"} />
                <ToggleSwitch
                    checked={currentTheme === "dark"}
                    onChange={handleToggleChange}
                />
                <FaMoon size={25} className={currentTheme === "dark" ? "text-blue-400" : "text-neutral-200"} />
            </div>
        </Navbar>
    );
}
