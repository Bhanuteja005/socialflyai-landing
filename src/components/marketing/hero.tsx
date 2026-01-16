"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
    LayoutTemplateIcon, 
    ComponentIcon, 
    MonitorSmartphoneIcon, 
    BoxIcon, 
    PenToolIcon, 
    ArrowRightIcon,
    CheckIcon
} from "lucide-react";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Hero = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✓ Successfully added!");
                setName("");
                setEmail("");
                // Optional: Close modal after success
                 setTimeout(() => setOpen(false), 2000);
            } else {
                setMessage(data.error || "Something went wrong");
            }
        } catch (error) {
            setMessage("Error joining waitlist. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-0 lg:py-4 min-h-[45vh] overflow-hidden bg-transparent">
            
            {/* Background Concentric Circles (Visible Orbits) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="rounded-full border border-gray-100 w-[240px] h-[240px]" />
                <div className="absolute rounded-full border border-gray-100 w-[440px] h-[440px]" />
                <div className="absolute rounded-full border border-gray-100 w-[640px] h-[640px]" />
                <div className="absolute rounded-full border border-gray-100 w-[900px] h-[900px] opacity-50" />
            </div>

            {/* Orbiting Elements (smaller, tighter for a lifted look) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-0 lg:mb-0">
                {/* Inner Ring (smaller) */}
                <OrbitingCircles iconSize={28} radius={100} reverse speed={1} path={false}>
                    <div className="p-2 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.insta className="w-5 h-5 text-green-600" />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={28} radius={100} speed={1} delay={10} path={false}>
                    <div className="p-2 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.facebook className="w-5 h-5 text-green-600" />
                    </div>
                </OrbitingCircles>

                {/* Middle Ring */}
                <OrbitingCircles iconSize={36} radius={180} speed={0.85} delay={5} path={false}>
                    <div className="p-3 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.linkedin className="w-6 h-6 text-green-600" />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={36} radius={180} reverse speed={0.85} delay={15} path={false}>
                    <div className="p-3 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.x className="w-6 h-6 text-green-600" />
                    </div>
                </OrbitingCircles>

                {/* Outer Ring */}
                <OrbitingCircles iconSize={44} radius={260} speed={0.6} delay={20} path={false}>
                    <div className="p-3 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.youtube className="w-7 h-7 text-green-600" />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={44} radius={260} reverse speed={0.6} delay={10} path={false}>
                    <div className="p-3 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.tiktok className="w-7 h-7 text-green-600" />
                    </div>
                </OrbitingCircles>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-y-6 relative z-10 px-4 mt-0 transform -translate-y-4 lg:-translate-y-6">

                <div className="flex flex-col items-center justify-center text-center gap-y-4">
                    <Container delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center !leading-tight text-gray-900 tracking-tight">
                            Smart Social Media <br/>
                            <span className="text-green-600">Management.</span>
                        </h1>
                    </Container>

                    <Container delay={0.15}>
                        <p className="max-w-xl mx-auto text-base lg:text-lg text-center text-gray-500 leading-relaxed">
                             Manage all your social media accounts with AI-powered automation. Socialfly helps you create, schedule, and grow your audience from one simple dashboard.
                        </p>
                    </Container>

                    {/* Waitlist Dialog */}
                    <Container delay={0.2} className="mt-6 flex justify-center">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                {message.includes("Successfully") ? (
                                    <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 rounded-full h-12 px-8 text-base flex items-center gap-2">
                                            Joined Waitlist
                                            <CheckIcon className="w-4 h-4" />
                                        </Button>
                                ) : (
                                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full h-12 px-8 text-base shadow-lg transition-transform hover:scale-105 active:scale-95">
                                        Join the waitlist
                                        <ArrowRightIcon className="ml-2 w-4 h-4" />
                                    </Button>
                                )}
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Join the Waitlist</DialogTitle>
                                    <DialogDescription>
                                        Enter your details to get early access to Socialfly.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                                    <div className="grid gap-2">
                                        <Input
                                            id="name"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={loading}>
                                        {loading ? "Joining..." : "Join Waitlist"}
                                    </Button>
                                    {message && (
                                        <p className={`text-center text-sm ${message.includes("Error") ? "text-red-500" : "text-green-600"}`}>
                                            {message}
                                        </p>
                                    )}
                                </form>
                            </DialogContent>
                        </Dialog>
                    </Container>

                   
                </div>
            </div>
            
             {/* Background Gradients */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-200/40 blur-[100px] rounded-full -z-10 pointer-events-none opacity-50" />
        </div>
    )
};

export default Hero
