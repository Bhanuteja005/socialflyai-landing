import Wrapper from "@/components/global/wrapper";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative bg-white">
            <Hero />
            <Features />
            <Integration />
        </Wrapper>
    )
};

export default HomePage
