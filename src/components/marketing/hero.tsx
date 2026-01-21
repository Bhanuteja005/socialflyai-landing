"use client";

import { useState, useEffect } from "react";
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
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const checkSize = () => setIsLarge(window.innerWidth >= 1024);
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const innerRadius = isLarge ? 320 : 150;
    const outerRadius = isLarge ? 480 : 250;
    const innerIconSize = isLarge ? 40 : 30;
    const outerIconSize = isLarge ? 50 : 40;
    const innerPadding = isLarge ? 'p-3' : 'p-2';
    const outerPadding = isLarge ? 'p-4' : 'p-3';
    const innerIconClass = isLarge ? 'w-6 h-6' : 'w-4 h-4';
    const outerIconClass = isLarge ? 'w-8 h-8' : 'w-6 h-6';
    const bgInner = isLarge ? 'w-[640px] h-[640px]' : 'w-[300px] h-[300px]';
    const bgOuter = isLarge ? 'w-[1000px] h-[1000px]' : 'w-[500px] h-[500px]';

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
        <div className="relative flex flex-col items-center justify-center w-full py-0 lg:py-4 min-h-[80vh] lg:min-h-[90vh] overflow-x-hidden lg:overflow-visible bg-transparent">
            
            {/* Background Concentric Circles (Visible Orbits) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`rounded-full border border-gray-200/60 ${bgInner}`} />
                <div className={`absolute rounded-full border border-gray-200/60 ${bgOuter}`} />
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-0 lg:mb-0">
                
                {isLarge && (
                <>
                {/* Inner Ring */}
                <OrbitingCircles iconSize={innerIconSize} radius={innerRadius} speed={1.2} delay={0} path={false}>
                    <div className={`bg-white rounded-full shadow-lg border border-gray-100 ${innerPadding}`}>
                         <Icons.threads className={`${innerIconClass} text-black`} />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={innerIconSize} radius={innerRadius} reverse speed={1.2} delay={8} path={false}>
                    <div className={`bg-white rounded-full shadow-lg border border-gray-100 ${innerPadding}`}>
                         <Icons.linkedin className={`${innerIconClass} text-blue-700`} />
                    </div>
                </OrbitingCircles>
                 <OrbitingCircles iconSize={innerIconSize} radius={innerRadius} speed={1.2} delay={20} path={false}>
                     <div className={`bg-white rounded-full shadow-lg border border-gray-100 ${innerPadding}`}>
                         <Icons.facebook className={`${innerIconClass} text-blue-600`} />
                    </div>
                </OrbitingCircles>
                </>
                )}

                {/* Outer Ring */}
                <OrbitingCircles iconSize={outerIconSize} radius={outerRadius} reverse speed={0.8} delay={5} path={false}>
                     <div className={`bg-white rounded-full shadow-lg border border-gray-100 ${outerPadding}`}>
                         <Icons.x className={`${outerIconClass} text-black`} />
                    </div>
                </OrbitingCircles>
                {isLarge ? (
                <OrbitingCircles iconSize={outerIconSize} radius={outerRadius} speed={0.8} delay={10} path={false}>
                    <div className={`bg-white rounded-full shadow-lg border border-gray-100 ${outerPadding}`}>
                        <Icons.instagram className={`${outerIconClass} text-pink-600`} />
                    </div>
                </OrbitingCircles>
                ) : (
                <>
                <OrbitingCircles iconSize={outerIconSize} radius={outerRadius} speed={0.8} delay={10} path={false}>
                    <div className={`bg-white rounded-full shadow-lg border border-gray-100 ${outerPadding}`}>
                        <Icons.linkedin className={`${outerIconClass} text-blue-700`} />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={outerIconSize} radius={outerRadius} reverse speed={0.8} delay={15} path={false}>
                    <div className={`bg-white rounded-full shadow-lg border border-gray-100 ${outerPadding}`}>
                        <Icons.facebook className={`${outerIconClass} text-blue-600`} />
                    </div>
                </OrbitingCircles>
                <OrbitingCircles iconSize={outerIconSize} radius={outerRadius} speed={0.8} delay={20} path={false}>
                    <div className={`bg-white rounded-full shadow-lg border border-gray-100 ${outerPadding}`}>
                        <Icons.instagram className={`${outerIconClass} text-pink-600`} />
                    </div>
                </OrbitingCircles>
                </>
                )}

            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center gap-y-6 relative z-10 px-4 pt-4 lg:pt-0 mt-0 transform -translate-y-10 lg:-translate-y-4">

                <div className="flex flex-col items-center justify-center text-center gap-y-6">
                    <Container delay={0.1}>
                        <div className="relative">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center !leading-tight text-gray-900 tracking-tight">
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
                        
                        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
                            <Link href="/privacy-policy" className="hover:text-gray-900 underline">
                                Privacy Policy
                            </Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/terms-and-conditions" className="hover:text-gray-900 underline">
                                Terms of Service
                            </Link>
                        </div>
                        
                    </Container>

                   
                </div>
            </div>
            
             {/* Background Gradients */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-200/40 blur-[100px] rounded-full -z-10 pointer-events-none opacity-50" />
        </div>
    )
};

export default Hero
