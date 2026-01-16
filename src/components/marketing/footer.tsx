import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center py-8 px-6 lg:px-8 w-full bg-white border-t border-gray-200">
            <div className="flex flex-col items-center justify-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image 
                        src="/images/logo1.png" 
                        alt="Socialfly Logo" 
                        width={96} 
                        height={96} 
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <span className="text-lg font-semibold text-gray-900">
                        Socialflyai
                    </span>
                </Link>
                <p className="text-sm text-gray-600">
                    © 2026 Socialfly. AI-powered social media management platform.
                </p>
            </div>
        </footer>
    )
};

export default Footer
