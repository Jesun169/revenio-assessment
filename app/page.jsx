import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeatureProducts from "@/components/FeatureProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <Hero />
      <Features />
      <FeatureProducts />
      <WhyChooseUs />
      <Testimonials />


    </main>
  );
}