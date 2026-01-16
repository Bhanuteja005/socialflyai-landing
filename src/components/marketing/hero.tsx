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
import { Input } from "@/components/ui/input";

const Hero = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

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
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✓ Added!");
                setEmail("");
                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessage(data.error || "Error");
            }
        } catch (error) {
            setMessage("Error");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-0 lg:py-4 min-h-[45vh] lg:min-h-[55vh] overflow-hidden bg-transparent">
            
            {/* Background Concentric Circles (Visible Orbits) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="rounded-full border border-gray-200/60 w-[380px] h-[380px]" />
                <div className="absolute rounded-full border border-gray-200/60 w-[620px] h-[620px]" />
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-0 lg:mb-0">
                
                {/* Inner Ring */}
                <OrbitingCircles iconSize={40} radius={190} speed={1.2} delay={0} path={false}>
                    <div className="p-3 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.insta className="w-6 h-6 text-pink-600" />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={40} radius={190} reverse speed={1.2} delay={10} path={false}>
                    <div className="p-3 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.facebook className="w-6 h-6 text-blue-600" />
                    </div>
                </OrbitingCircles>
                 <OrbitingCircles iconSize={40} radius={190} speed={1.2} delay={20} path={false}>
                     <div className="p-3 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.linkedin className="w-6 h-6 text-blue-700" />
                    </div>
                </OrbitingCircles>


                {/* Outer Ring */}
                <OrbitingCircles iconSize={50} radius={310} speed={0.8} delay={0} path={false}>
                    <div className="p-4 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.youtube className="w-8 h-8 text-red-600" />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={50} radius={310} reverse speed={0.8} delay={15} path={false}>
                     <div className="p-4 bg-white rounded-full shadow-lg border border-gray-100">
                         <Icons.x className="w-8 h-8 text-black" />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={50} radius={310} speed={0.8} delay={30} path={false}>
                    <div className="p-4 bg-white rounded-full shadow-lg border border-gray-100">
                        <Icons.instagram className="w-8 h-8 text-pink-600" />
                    </div>
                </OrbitingCircles>

            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-y-6 relative z-10 px-4 mt-0 transform -translate-y-4">

                <div className="flex flex-col items-center justify-center text-center gap-y-6">
                    <Container delay={0.1}>
                        <div className="relative">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center !leading-tight text-gray-900 tracking-tight">
                                Smart Social Media <br/>
                                <span className="text-green-600">Management.</span>
                            </h1>
                        </div>
                    </Container>

                    <Container delay={0.15}>
                        <p className="max-w-xl mx-auto text-base lg:text-lg text-center text-gray-500 leading-relaxed">
                             Manage all your social media accounts with AI-powered automation. Socialfly helps you create, schedule, and grow your audience from one simple dashboard.
                        </p>
                    </Container>

                    {/* Email Input & UI */}
                    <Container delay={0.2} className="w-full max-w-sm mt-4">
                        <form onSubmit={handleSubmit} className="relative flex items-center w-full">
                            <div className="relative flex-1">
                                <Input 
                                    className="w-full h-12 lg:h-14 rounded-full pl-6 pr-36 bg-white border-gray-200 shadow-sm focus:ring-green-500/20 text-base"
                                    placeholder="your@email.com"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button 
                                    type="submit" 
                                    disabled={loading || Boolean(message)}
                                    className="absolute right-1.5 top-1.5 bottom-1.5 h-auto rounded-full px-6 bg-black hover:bg-neutral-800 text-white font-medium transition-all"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : message ? (
                                        <span className="flex items-center gap-1 text-green-400">
                                            <CheckIcon className="w-4 h-4" />
                                            Joined
                                        </span>
                                    ) : (
                                        "Join Waitlist"
                                    )}
                                </Button>
                            </div>
                        </form>
                        
                    </Container>

                   
                </div>
            </div>
            
             {/* Background Gradients */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-200/40 blur-[100px] rounded-full -z-10 pointer-events-none opacity-50" />
        </div>
    )
};

export default Hero
