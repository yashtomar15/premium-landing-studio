
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Cta />
      </main>
    </>
  );
};

export default Index;
