"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";

const CTA = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 bg-white">
            <Container className="py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-white text-center border border-gray-200 overflow-hidden">
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#d4d4d4"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#d4d4d4"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #10b981 0deg, #059669 180deg, #047857 360deg)',
                        }}
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug text-gray-900">
                        Ready to grow your <br /> <span className="font-subheading italic text-green-600">social presence</span> ?
                    </h2>
                    <p className="text-sm md:text-lg text-center text-gray-600 max-w-2xl mx-auto mt-4">
                        Join thousands of creators and businesses managing their social media with AI-powered automation. Grow faster, post smarter. <span className="hidden lg:inline">Join our waitlist today!</span>
                    </p>
                    <Link href="#" className="mt-8">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                            Join Waitlist Now
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
};

export default CTA
