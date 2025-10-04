import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import HowItWorks from "../components/HowItWorks";
import FeaturedStories from "../components/FeaturedStories";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Newsletter from "../components/Newsletter";

const Inicio = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <HowItWorks />
      <FeaturedStories />
      <Testimonials />
      <CTASection
        title="Quer ser um clube parceiro?"
        description="Tenha acesso antecipado aos melhores talentos, ferramentas de organização de campeonatos e muito mais."
        primaryButtonText="Solicitar parceria"
        secondaryButtonText="Saiba mais"
      />
      <Newsletter />
    </>
  );
};

export default Inicio;
