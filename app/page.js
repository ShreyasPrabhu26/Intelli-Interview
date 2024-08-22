import Companies from "@/components/homepageComponents/Companies";
import { Hero } from "@/components/homepageComponents/Hero";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { benefitOne, benefitTwo } from "@/components/homepageComponents/data";
import { BenefitsSection } from "@/components/homepageComponents/BenifitsSection"
import { GoogleGeminiEffectComponent } from "@/components/homepageComponents/GoogleGeminiEffectComponent";
import { GlobeComponent } from "@/components/homepageComponents/GlobeComponent";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col gap-10">
        <Hero />
        <Companies />
        <BenefitsSection data={benefitOne} />
        <BenefitsSection imgPos="right" data={benefitTwo} />
      </Container>
      <GoogleGeminiEffectComponent />
      <GlobeComponent />
      <div className="h-[300vh]">di</div>
    </>
  );
}
