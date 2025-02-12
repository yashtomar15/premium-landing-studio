
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Cta />
    </main>
  );
};

export default Index;
