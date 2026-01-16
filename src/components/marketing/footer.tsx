import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative flex flex-col items-center justify-center py-8 px-6 lg:px-8 w-full bg-white border-t border-gray-200">
            <div className="relative w-full max-w-5xl">
                <div className="flex items-center justify-between h-full">
                    <div className="w-1/3">{/* left spacer */}</div>

                    <div className="absolute left-1/2 top-0 transform -translate-x-[60%] -translate-y-1/2">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo1.png"
                                alt="Socialfly Logo"
                                width={96}
                                height={96}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <span className="ml-2 text-lg font-semibold text-gray-900">Socialflyai</span>
                        </Link>
                    </div>

                    <div className="w-1/3 flex justify-end">{/* right spacer */}</div>
                </div>

                <div className="mt-12 w-full text-center">
                    <p className="mx-auto text-sm text-gray-600">© 2026 Socialfly. AI-powered social media management platform.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer
