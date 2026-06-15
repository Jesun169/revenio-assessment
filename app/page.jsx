import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeatureProducts from "@/components/FeatureProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <Hero />
      <FeatureProducts />
      <Features />
      <WhyChooseUs />
      <Testimonials />


    </main>
  );
}