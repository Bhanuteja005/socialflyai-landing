import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 bg-white">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 text-gray-900">
                        Powerful AI Features <br /> for <span className="font-subheading italic text-green-600">Social Growth</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-gray-600 mt-6">
                        Manage all your social media accounts with intelligent automation. Create engaging content, schedule posts, and grow your audience across all platforms.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 relative overflow-visible max-w-4xl mx-auto">

                {FEATURES.map((feature, index) => (
                    <Container key={feature.title} delay={0.1 + index * 0.1} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-white border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg",
                    )}>
                        <MagicCard
                            gradientFrom="#10b981"
                            gradientTo="#059669"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(16, 185, 129, 0.1)"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                                    <feature.icon className="size-5 text-green-600" />
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                {feature.description}
                            </p>

                            <div className="mt-6 w-full bg-white/50 overflow-hidden rounded-lg h-64 flex items-center justify-center">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={index === 0 ? 800 : 500}
                                    height={index === 0 ? 800 : 500}
                                    className={cn(
                                        "w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105",
                                        index === 0 && "!w-auto !h-auto max-h-[90%] p-0"
                                    )}
                                />
                            </div>
                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    )
};

export default Features
