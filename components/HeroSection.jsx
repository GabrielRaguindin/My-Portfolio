"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Drawer, Label, TextInput, Textarea } from "flowbite-react";
import { PiHandWaving } from "react-icons/pi";

export default function HeroSection() {

    // Contact Form Logic
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSuccess("Message sent! Thanks for reaching out.");
            setFormData({ name: "", email: "", message: "" });
            setIsSuccess(true);
        } else {
            setSuccess("A problem has occured. Please try again later.");
            setIsSuccess(false);
        }

        setLoading(false);
    }

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <section id="home" className="flex flex-col text-center text-slate-800 dark:text-slate-200">
            <div className="flex flex-row gap-5 items-center justify-center p-5">
                <div className="p-4">
                    <Image
                        src="/Profile.jpg"
                        alt="Gabriel Raguindin"
                        width={200}
                        height={200}
                        className="rounded-2xl shadow-lg"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-4xl">Hi! I&apos;m Gabriel Raguindin</h1>
                    </div>
                    <div>
                        <p className="text-xl font-light"> Virtual Assistant | Web Developer | Tech Support</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <a href="/Gabriel Raguindin Resume.pdf" download="Gabriel Raguindin Resume.pdf">
                            <Button outline gradientDuoTone="tealToLime" size="sm" className="hover:scale-105 active:scale-100 transition duration-200 focus:ring-0">
                                Download Resume
                            </Button>
                        </a>
                        <Button outline gradientDuoTone="tealToLime" size="sm"
                            className="transform hover:scale-105 active:scale-100 transition duration-200 focus:ring-0"
                            onClick={() => setOpen(true)}>
                            Let&apos;s Talk!
                        </Button>
                    </div>
                </div>
            </div>
            <Drawer open={open} onClose={handleClose}>
                <Drawer.Header title="Hey There!" titleIcon={PiHandWaving} />
                <Drawer.Items>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mt-3">
                            <Label htmlFor="name" className="mb-2 block text-left">
                                Name
                            </Label>
                            <TextInput id="name" name="name" type="text" onChange={handleChange} value={formData.name} required />
                        </div>
                        <div className="mb-4 mt-3">
                            <Label htmlFor="email" className="mb-2 block text-left">
                                Email
                            </Label>
                            <TextInput id="email" name="email" type="email" onChange={handleChange} value={formData.email} required />
                        </div>
                        <div className="mb-6">
                            <Label htmlFor="message" className="mb-2 block text-left">
                                Your message
                            </Label>
                            <Textarea id="message" name="message" placeholder="What&apos;s on your mind?" rows={5}
                                onChange={handleChange} value={formData.message} required />
                        </div>
                        <div className="mb-6">
                            <Button gradientDuoTone="tealToLime" type="submit" size="sm"
                                className="w-full transform hover:scale-105 active:scale-100 transition duration-200 focus:ring-0"
                                disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </div>
                        {success && (
                            <p className={isSuccess ? "text-lime-500 mb-3" : "text-red-500 mb-3"}>
                                {success}
                            </p>
                        )}
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <a href="mailto:raguindin.rodgabriel.b@gmail.com" className="hover:underline">
                                raguindin.rodgabriel.b@gmail.com
                            </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <a href="tel:+639561753175" className="hover:underline">
                                +(63) 956-175-3175
                            </a>
                        </p>
                    </form>
                </Drawer.Items>
            </Drawer>
        </section>
    );
}