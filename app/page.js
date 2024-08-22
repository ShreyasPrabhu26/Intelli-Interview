import Companies from "@/components/homepageComponents/Companies";
import { GoogleGeminiEffectComponent } from "@/components/homepageComponents/GoogleGeminiEffectComponent";
import { Hero } from "@/components/homepageComponents/Hero";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { benefitOne, benefitTwo } from "@/components/homepageComponents/data";
import { BenefitsSection } from "@/components/homepageComponents/BenifitsSection"

export default function Home() {
  return (
    <Container className="flex flex-col gap-10">
      <Hero />
      <Companies />
      <BenefitsSection data={benefitOne} />
      <BenefitsSection imgPos="right" data={benefitTwo} />
    </Container>
  );
}
