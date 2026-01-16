import Image from "next/image";
import Link from "next/link";
import Wrapper from "../global/wrapper";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-white/90 backdrop-blur-sm shadow-sm transition-colors z-50">
            <Wrapper className="h-full">
                <div className="relative flex items-center justify-between h-full">
                    <div className="flex items-center w-1/3">
                        {/* left spacer */}
                    </div>

                    <div className="absolute left-1/2 top-1/2 transform -translate-x-[60%] -translate-y-1/2">
                        <Link href="/" className="flex items-center">
                            <Image 
                                    src="/images/logo1.png" 
                                    alt="Socialfly Logo" 
                                    width={128} 
                                    height={128} 
                                    className="w-32 h-32 object-cover rounded-full"
                                />
                            <span className="text-lg font-semibold text-gray-900 leading-none ml-1">
                                Socialflyai
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 w-1/3 justify-end">
                        {/* right spacer / future nav items */}
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
