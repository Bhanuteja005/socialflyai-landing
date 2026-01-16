import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import { Button } from "../ui/button";
import Ripple from "../ui/ripple";

const SOCIAL_PLATFORMS = [
    { icon: Icons.linkedin, position: "left-3", size: "small", iconSize: "small", className: "hidden lg:flex", color: "text-blue-600" },
    { icon: Icons.tiktok, position: "left-2", size: "medium", iconSize: "medium", color: "text-black" },
    { icon: Icons.insta, position: "left-1", size: "large", iconSize: "large", color: "text-pink-600" },
    { icon: Icons.youtube, position: "right-1", size: "large", iconSize: "large", color: "text-red-600" },
    { icon: Icons.x, position: "right-2", size: "medium", iconSize: "medium", color: "text-black" },
    { icon: Icons.facebook, position: "right-3", size: "small", iconSize: "small", className: "hidden lg:flex", color: "text-blue-600" }
];

const Integration = () => {

    const getPositionClasses = (position: string) => {
        switch (position) {
            case "left-3": return "-translate-x-[285px]";
            case "left-2": return "-translate-x-[210px]";
            case "left-1": return "-translate-x-[125px]";
            case "right-1": return "translate-x-[125px]";
            case "right-2": return "translate-x-[210px]";
            case "right-3": return "translate-x-[285px]";
            default: return "";
        }
    };

    const getSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "w-20 h-20 p-4";
            case "medium": return "w-16 h-16 p-3";
            case "small": return "w-12 h-12 p-2";
            default: return "w-20 h-20 p-4";
        }
    };

    const getIconSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "w-8 h-8";
            case "medium": return "w-6 h-6";
            case "small": return "w-4 h-4";
            default: return "w-8 h-8";
        }
    };

    // Mobile-specific helpers (reduced radii/sizes)
    const getMobilePositionClasses = (position: string) => {
        switch (position) {
            case "left-3": return "-translate-x-[110px] -translate-y-2";
            case "left-2": return "-translate-x-[80px] -translate-y-1";
            case "left-1": return "-translate-x-[55px]";
            case "right-1": return "translate-x-[55px]";
            case "right-2": return "translate-x-[80px]";
            case "right-3": return "translate-x-[110px]";
            default: return "";
        }
    };

    const getMobileSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "w-10 h-10 p-2";
            case "medium": return "w-8 h-8 p-1";
            case "small": return "w-6 h-6 p-1";
            default: return "w-8 h-8 p-1";
        }
    };

    const getMobileIconSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "w-5 h-5";
            case "medium": return "w-4 h-4";
            case "small": return "w-3 h-3";
            default: return "w-4 h-4";
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 overflow-x-hidden">

            {/* Section heading / tagline */}
            <div className="w-full text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Social Media Integration</h2>
            </div>

            <Container className="relative">
                <div className="relative flex flex-col lg:hidden items-center justify-center overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[60%] h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full -rotate-12 blur-[6.5rem] -z-10 pointer-events-none"></div>

                    <div className="relative flex h-[320px] w-full flex-col items-center justify-center overflow-visible max-w-[720px] px-6 mx-auto">
                        <Ripple />

                        {/* centered logo scaled for mobile */}
                        <div className="absolute z-20 flex items-center justify-center">
                            <Image
                                src="/images/logo1.png"
                                alt="Socialfly Logo"
                                width={96}
                                height={96}
                                className="w-20 h-20 rounded-full object-cover group-hover:scale-110 transition-all duration-500 shadow-xl"
                            />
                        </div>

                           

                        {/* icons flanking the logo (mobile): left 3, logo, right 3 */}
                        <div className="absolute z-20 inset-0 flex items-center justify-center lg:hidden">
                            <div className="flex items-center justify-center gap-6 w-full max-w-[760px] px-4">
                                <div className="flex items-center gap-3">
                                    {SOCIAL_PLATFORMS.slice(0, 3).map((platform, i) => (
                                        <div key={i} className={cn("flex items-center justify-center rounded-full bg-white shadow-xl shadow-black/10 border border-gray-100", getMobileSizeClasses(platform.size))}>
                                            <platform.icon className={cn(getMobileIconSizeClasses(platform.iconSize), platform.color)} />
                                        </div>
                                    ))}
                                </div>

                                <div className="mx-2">
                                    <Image src="/images/logo1.png" alt="Socialfly Logo" width={96} height={96} className="w-20 h-20 rounded-full object-cover transition-all duration-500 shadow-xl" />
                                </div>

                                <div className="flex items-center gap-3">
                                    {SOCIAL_PLATFORMS.slice(3).map((platform, i) => (
                                        <div key={i} className={cn("flex items-center justify-center rounded-full bg-white shadow-xl shadow-black/10 border border-gray-100", getMobileSizeClasses(platform.size))}>
                                            <platform.icon className={cn(getMobileIconSizeClasses(platform.iconSize), platform.color)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>


            <Container delay={0.3}>
                <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[60%] h-14 lg:h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full -rotate-12 blur-[6.5rem] -z-10 pointer-events-none"></div>

                    <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-visible">
                        <Ripple />
                    </div>

                    <div className="absolute z-20 flex items-center justify-center group">
                         <Image 
                            src="/images/logo1.png" 
                            alt="Socialfly Logo" 
                            width={128} 
                            height={128} 
                            className="w-32 h-32 rounded-full object-cover group-hover:scale-110 transition-all duration-500 shadow-xl"
                        />
                    </div>

              

                    {SOCIAL_PLATFORMS.map((platform, index) => (
                        <div
                            key={index}
                            className={cn(
                                "absolute z-20 size-16 p-3 rounded-full flex items-center justify-center bg-white shadow-xl shadow-black/10 transition-all duration-300 hover:scale-110 border border-gray-100",
                                getPositionClasses(platform.position),
                                getSizeClasses(platform.size),
                                platform.className
                            )}
                        >
                            <platform.icon
                                className={cn(
                                    platform.color,
                                    getIconSizeClasses(platform.iconSize)
                                )}
                            />
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    )
};

export default Integration;
